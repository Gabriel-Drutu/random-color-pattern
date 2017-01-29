<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Random patterns</title>
    <link href='tablou.css' rel='stylesheet' />
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src='tablou.js' type='text/javascript'></script>
  </head>
  <body>
        <div class="pagecontain">
          <div class="content-bit row-tablou1">
            <div class="control">
              <p>Control menu</p>
              <p><button onclick='genereaza()'>Generate</button></p>
              
              <div class="control-culori">
                <p class="s-titlu">Select colors</p>
                <div class="all-none">
                  <button onclick='nici_una()'>None</button>
                  <button onclick='toate()'>All</button>
                </div>
                <div class="select-culori">
                  <div class="select-box rosu selectat"></div>
                  <div class="select-box portocaliu selectat"></div>
                  <div class="select-box galben selectat"></div>
                  <div class="select-box gri selectat"></div>
                  <div class="select-box verde selectat"></div>
                  <div class="select-box albastru selectat"></div>
                  <div class="select-box roz selectat"></div>
                  <div class="select-box asfalt selectat"></div>
                </div>
                <div class="clear"></div>
                <p class="mesaj"></p>
              </div>
            </div>
            <div class="tablou">
              <div class="interior">
                
              </div>
            </div>
          </div>
        </div>

  </body>
</html>