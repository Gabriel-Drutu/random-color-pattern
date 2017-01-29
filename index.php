<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Random patterns</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href='tablou.css' rel='stylesheet' />
  </head>
  <body>
        <div class="pagecontain">
          <div class="content-bit row-tablou1">
            <div class="control">
              <p>Control menu</p>
              <p><button type="button" class="btn btn-success" id="genereaza">Generate</button></p>
              
              <div class="control-culori">
                <p class="s-titlu">Select colors</p>
                <div class="all-none">
                  <button type="button" id="nici-una">None</button>
                  <button type="button" id="toate">All</button>
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
        <!-- scripts -->
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src='tablou.js' type='text/javascript'></script>
  </body>
</html>