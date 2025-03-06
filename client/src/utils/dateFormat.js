export const ISOtoDate = (DateIso) => {
    const date = new Date(DateIso);

    const formatedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return formatedDate;
}