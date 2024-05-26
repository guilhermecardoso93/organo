import './styles.css';

export function Time(props) {
  return (
    <section 
      className="time-container"
      style={{backgroundColor: props.corSecundaria}}
    >
      <h3>{props.name}</h3>
      <div>

      </div>
    </section>
  );
}
