export const formatDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // @ts-ignore
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
  };