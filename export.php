<?php
require_once("pdf_lib/dompdf_config.inc.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Output</title>
<style type="text/css">
	.center { text-align:center; margin:60px 0; }
	#table-output { width:100%; }
	.t1 { font-size:18px; text-transform:uppercase; }
</style>
</head>

<body>
<?php ob_start(); ?>
<div id="popup-cont">
	<p class="center"><img src="http://localhost/aquacomfort/images/logo.jpg" alt=""/></p>
    <table id="table-output">
    	<tr>
        	<td class="t1">&nbsp;</td>
            <td class="t1"><strong>HEAT PUMPS</strong></td>
            <td class="t1"><strong>FOSSIL FUEL HEATERS</strong></td>
            <td class="t1"><strong>POOL HEATING PROFITS</strong></td>
            <td>&nbsp;</td>
        </tr>
        <tr>
        	<td class="t1"><strong>WHOLESHALE PRICE</strong></td>
            <td><?php echo $_POST['inp1']; ?></td>
            <td><?php echo $_POST['inp21']; ?></td>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
        	<td class="t1"><strong>RETAIL PRICE</strong></td>
            <td><?php echo $_POST['inp2']; ?></td>
            <td><?php echo $_POST['inp21']; ?></td>
            <td colspan="2"><p>Gas line/propane tanks installed by others initial cost difference earned back by end of the first season (and then some) due to reduced operated cost with AquaComfort Heat Pumps</p></td>
        </tr>
        <tr>
        	<td class="t1"><strong>INSTALLED PRICE</strong></td>
            <td><?php echo $_POST['inp3']; ?></td>
            <td><?php echo $_POST['inp23']; ?></td>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
        	<td class="t1"><strong>PROFIT DOLLARS PER UNIT</strong></td>
            <td><?php echo $_POST['result1h']; ?></td>
            <td><?php echo $_POST['result21h']; ?></td>
            <td colspan="2">No Internet to compete with</td>
        </tr>
        <tr>
        	<td class="t1"><strong>UNITS SOLD LAST SEASON</strong></td>
            <td><?php echo $_POST['inp4']; ?></td>
            <td><?php echo $_POST['inp24']; ?></td>
            <td><?php echo $_POST['result31h']; ?></td>
            <td>Total Machines</td>
        </tr>
        <tr>
        	<td class="t1"><strong>TOTAL PROFIT DOLLARS</strong></td>
            <td><?php echo $_POST['result2h']; ?></td>
            <td><?php echo $_POST['result22h']; ?></td>
            <td><?php echo $_POST['result32h']; ?></td>
            <td>&nbsp;</td>
        </tr>
        <tr>
        	<td class="t1"><strong>UNITS SOLD THIS SEASON</strong></td>
            <td><?php echo $_POST['inp5']; ?></td>
            <td><?php echo $_POST['inp25']; ?></td>
            <td><?php echo $_POST['result33h']; ?></td>
            <td>Total Machines</td>
        </tr>
        <tr>
        	<td class="t1"><strong>TOTAL PROFIT DOLLARS</strong></td>
            <td><?php echo $_POST['result3h']; ?></td>
            <td><?php echo $_POST['result23h']; ?></td>
            <td><?php echo $_POST['result34h']; ?></td>
            <td>&nbsp;</td>
        </tr>
        <tr>
        	<td>&nbsp;</td>
            <td>&nbsp;</td>
            <td><strong>ADDITIONAL PROFIT W/ AQUACOMFORT</strong></td>
            <td><?php echo $_POST['result35h']; ?></td>
            <td>Same # of heaters, different mix</td>
        </tr>
    </table>
</div>

<?php 
	$output = ob_get_contents();
	ob_end_clean();
	if ( isset( $_POST["inp2"] ) ) {
	  
	  $old_limit = ini_set("memory_limit", "16M");
	  
	  $html = "hello";
	  $paper = "a4";
	  $orientation = "landscape";
	  
	  
	  $dompdf = new DOMPDF(); 
	  
	  $dompdf->load_html($output);
	  $dompdf->set_paper($paper, $orientation);
	  $dompdf->render();
	
	  $dompdf->stream("export.pdf");
	
	  exit(0);
	}	
?>

</body>
</html>