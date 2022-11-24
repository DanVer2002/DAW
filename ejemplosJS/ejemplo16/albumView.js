class AlbumView {
  constructor(albumView, modalView){
    this.albumView = albumView;
    this.modalView = modalView;
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onModalClick = this.onModalClick.bind(this);

    this.modalView.addEventListener('click', this.onModalClick);
    this.cargarContenedorFoto();
  }

  createImage(src){
    this.foto =  document.createElement('img');
    this.foto.src = src;
    return this.foto;
  }

  onThumbnailClick(event){
    this.images = this.createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    this.modalView.style.top = window.pageYOffset + 'px';
    this.modalView.appendChild(this.images);
    this.modalView.classList.remove('hidden');
    this.image.removeEventListener('click', this.onThumbnailClick);
  }

  onModalClick(){
    document.body.classList.remove('no-scroll');
    this.modalView.classList.add('hidden');
    this.modalView.innerHTML = '';
  }

  cargarContenedorFoto() {
    for(let i = 0; i < PHOTO_LIST.length; i++){
      this.photoSrc = PHOTO_LIST[i];
      this.image = this.createImage(this.photoSrc);
      this.image.addEventListener('click', this.onThumbnailClick);
      this.albumView.appendChild(this.image);
    }
  }

}
