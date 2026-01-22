function Card({ title, description, image }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow p-6">
      <img 
        src={image} 
        alt={title} 
        className="rounded-t-xl w-full h-48 object-cover mb-4 -mt-6 -mx-6" 
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
