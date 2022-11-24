class AlbumView {
  constructor(contenedorFoto){
    this.contenedorFoto = contenedorFoto;
    this.fotos = document.createElement('img');
    this.contenerdorFoto.appendChild(this.foto);
    this.cargarContenedorFoto();
  }
  cargarContenedorFoto() {
    for(let i = 0; i < PHOTO_LIST.length; i++){
      const photoSrc = PHOTO_LIST[i];
      const image = createImage(photoSrc);
      albumView.appendChild(image);
    }
  }
}
