<script>
      const navBtn = document.getElementById("navBtn");
      const sideNav = document.getElementById("sideNav");

      sideNav.style.left = "-1000px";
      navBtn.onclick = () => {
         console.log('lanzamos onclick');
         if (sideNav.style.left == "-1000px") {
            sideNav.style.left = "10px";
         } else {
            sideNav.style.left = "-1000px";
         }
      }
   </script>