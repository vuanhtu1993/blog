### Tổng hợp các tips CSS xảy ra trong thực tế:

```html
<style> 
#main {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  display: -webkit-flex; /* Safari */
  display: flex;
}

.test {
    background-color: red;
    width: 50px;
}

.green {
	width: calc(100% - 100px);
}
</style>

<body>

<h1>The flex Property</h1>

<div id="main">
  <div class="test">RED</div>
  <div class="test">RED</div>
  <div class="green" style="background-color:lightgreen;">Green div with more content.</div>
</div>

<p><b>Note:</b> Internet Explorer 9 and earlier versions do not support the flex property.</p>

<p><b>Note:</b> Internet Explorer 10 supports an alternative, the -ms-flex property. IE11 and newer versions fully support the flex property (do not need the -ms- prefix).</p>

<p><b>Note:</b> Safari 6.1 (and newer) supports an alternative, the -webkit-flex property.</p>

</body>
</html>

```