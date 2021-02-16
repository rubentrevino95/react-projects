function initTHREEjs(){
    scene = new THREE.Scene();
    camera2d = new THREE.OrthographicCamera( -screenWidth /128, screenWidth /128, screenHeight /128, -screenHeight /128, 0.01, 1000 );
    camera3d = new THREE.PerspectiveCamera( 90, (screenWidth/screenHeight), 0.1, 1000);
    cameraDEV = new THREE.PerspectiveCamera( 95, screenWidth/screenHeight, 0.1, 1000 );
    cameraPointer = new THREE.PerspectiveCamera( 95, screenWidth/screenHeight, 0.1, 1000 );
    camera3dScroll = new THREE.PerspectiveCamera( 90, screenWidth/screenHeight, 0.1, 1000 );
    povControls = new THREE.FirstPersonControls(camera3d);
    
    var mouseVector = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();