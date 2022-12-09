
type SimpleCardProps = {
  item: {
    imageUrl: string,
    title: string,
    description: string
  }
}
const SimpleCard = (props: SimpleCardProps) => {
  const { item } = props;
  return (
    <div className="SimpleCard">
      <img alt={`Image of ${item.title}`} src={item.imageUrl} />
      {item.title}
      {item.description}
    </div>
  );
}

export default SimpleCard;
