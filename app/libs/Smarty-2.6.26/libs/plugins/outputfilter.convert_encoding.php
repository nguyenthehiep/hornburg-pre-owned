<?php
function smarty_outputfilter_convert_encoding ($output, &$smarty) {
	return mb_convert_encoding($output, 'SJIS-WIN', 'UTF-8');
}
?>