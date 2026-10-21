__d(
  "WAWebVoipWaitForRequiredModule",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = 250;
    function s(t, r) {
      var o = t.getModuleIfRequired();
      return o != null
        ? (e || (e = n("Promise"))).resolve(o)
        : new (e || (e = n("Promise")))(function (e, n) {
            var o = Math.ceil(r / l),
              a = self.setInterval(function () {
                o--;
                try {
                  var r = t.getModuleIfRequired();
                  (r != null || o <= 0) && (self.clearInterval(a), e(r));
                } catch (e) {
                  (self.clearInterval(a), n(e));
                }
              }, l);
          });
    }
    i.waitForRequiredModule = s;
  },
  66,
);
