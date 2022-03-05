export default function Header1({ content }) {
  let { global } = { ...content };
  return <header>{global.name}</header>;
}
