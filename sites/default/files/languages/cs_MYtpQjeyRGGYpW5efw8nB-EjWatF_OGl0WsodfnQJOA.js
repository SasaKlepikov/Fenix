Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Objevila se AJAX HTTP chyba.","HTTP Result Code: !status":"V\u00fdsledn\u00fd k\u00f3d HTTP je: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP po\u017eadavek skon\u010dil neobvykle.","Debugging information follows.":"N\u00e1sleduj\u00ed informace pro lad\u011bn\u00ed.","Path: !uri":"Cesta: !uri","StatusText: !statusText":"Text stavu: !statusText","ResponseText: !responseText":"Text odpov\u011bdi:  !responseText","ReadyState: !readyState":"ReadyState: !readyState","Search":"Hledat","Configure":"Nastaven\u00ed","Show":"Uk\u00e1zat","Select all rows in this table":"Ozna\u010dit v\u0161echny \u0159\u00e1dky v t\u00e9to tabulce","Deselect all rows in this table":"Zru\u0161it ozna\u010den\u00ed v\u0161ech \u0159\u00e1dek v t\u00e9to tabulce","Hide":"Skr\u00fdt","Loading":"Na\u010d\u00edt\u00e1n\u00ed","Show shortcuts":"Zobrazit zkratky","(active tab)":"(aktivn\u00ed z\u00e1lo\u017eka)","@title dialog":"@title dialog","Hide shortcuts":"Skr\u00fdt zkratky"}} };