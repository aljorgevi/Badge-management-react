import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import PageLoading from '../components/Spinner/Spinner';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

export default function BadgeDetailsContainer(props) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const editedId = props.match.params.badgeId;

        const db = firebase.firestore();
        const data = await db.collection('badges').get();
        const arrayData = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        const arrayFilter = arrayData.filter((item) => item.id === editedId);

        setData(arrayFilter[0]);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteBadge = async () => {
    setLoading(true);
    setError(null);

    try {
      const deletedId = props.match.params.badgeId;

      const db = firebase.firestore();
      await db.collection('badges').doc(deletedId).delete();
      setLoading(false);

      props.history.push('/badges');
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <BadgeDetails
      modalIsOpen={modalIsOpen}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
      onDeleteBadge={handleDeleteBadge}
      data={data}
    />
  );
}
