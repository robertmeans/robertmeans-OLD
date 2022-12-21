
<nav> 
    <div>    
        <?php if ($thisPage=="about")
        echo "<a class=\"gradient\" href=\"home.php\">Home</a>";
        else {
        echo "<a class=\"gradient\" href=\"about.php\">About</a>"; 
        }?>
        
        <?php if ($thisPage=="mission")
        echo "<a class=\"gradient\" href=\"home.php\">Home</a>";
        else {
        echo "<a class=\"gradient\" href=\"mission.php\">Mission</a>"; 
        }?>
        
        <?php if ($thisPage=="projects")
        echo "<a class=\"gradient\" href=\"home.php\">Home</a>";
        else {
        echo "<a class=\"gradient\" href=\"websites.php\">Projects</a>"; 
        }?>

        <?php if ($thisPage=="contact")
        echo "<a class=\"gradient\" href=\"home.php\">Home</a>";
        else {
        echo "<a class=\"gradient\" href=\"contact.php\">Contact</a>"; 
        }?>
    </div>      
</nav><!-- nav -->