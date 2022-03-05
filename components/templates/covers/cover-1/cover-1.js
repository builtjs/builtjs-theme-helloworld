export default function Cover1({ content }) {
    let { attributes } = content;
    return (
      <section>
          <h1>{attributes.heading}</h1>
      </section>
    );
  }