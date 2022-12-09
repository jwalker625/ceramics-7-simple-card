import React from 'react';
import './SimpleCard.css';

type DescriptionProps = {
  description: string
} & React.ComponentProps<'p'>;

const Description = ({ description }: DescriptionProps) => {
  return <p>{description}</p>;
}

type ImageProps = {
  imageUrl: string,
  title: string
} & React.ComponentProps<'img'>;

const Image = ({ imageUrl, title }: ImageProps) => {
  return <img alt={`Image of ${title}`} src={imageUrl} />;
}

type TitleProps = {
  title: string
} & React.ComponentProps<'h2'>;

const Title = ({ title }: TitleProps) => {
  return <h2>{title}</h2>;
}

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
      <div className="SimpleCard-imageContainer">
        <Image title={item.title} imageUrl={item.imageUrl} className="SimpleCard-image" />
      </div>
      <div className="SimpleCard-textContainer">
        <Title title={item.title} className="SimpleCard-title" />
        <Description description={item.description} className="SimpleCard-description" />
      </div>
    </div>
  );
}

export default SimpleCard;
