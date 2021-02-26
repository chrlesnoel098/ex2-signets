import './Dossier.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{ backgroundColor: couleur }}>
      <div className="couverture">
        <span className="deplacer"><SortIcon /></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <button>
      <IconButton aria-label="plus">
        <MoreVertIcon />
      </IconButton>
      </button>
    </article>
  );
}