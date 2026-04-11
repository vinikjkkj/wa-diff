__d(
  "WAWebUpdateMusicBlocklistAction",
  ["WAWebAsISOCountryCode", "WAWebMsgCollection", "WAWebMusicParsingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = o("WAWebMsgCollection").MsgCollection.get(t);
      if (r != null) {
        var a = r.interactiveAnnotations;
        if (a != null) {
          var i = a.findIndex(function (e) {
            var t;
            return (
              ((t = e.embeddedContent) == null ? void 0 : t.embeddedMusic) !=
              null
            );
          });
          if (i !== -1) {
            var l = a[i];
            if (l != null) {
              var s =
                (n = l.embeddedContent) == null ? void 0 : n.embeddedMusic;
              if (s != null) {
                var u = new Set();
                for (var c of e) {
                  var d = o("WAWebAsISOCountryCode").asISOCountryCode(c);
                  d != null && u.add(d);
                }
                var m = o("WAWebMusicParsingUtils").countryCodeSetToBuffer(u),
                  p = [].concat(a);
                ((p[i] = babelHelpers.extends({}, l, {
                  embeddedContent: babelHelpers.extends({}, l.embeddedContent, {
                    embeddedMusic: babelHelpers.extends({}, s, {
                      countryBlocklist: m,
                    }),
                  }),
                })),
                  (r.interactiveAnnotations = p));
              }
            }
          }
        }
      }
    }
    l.updateMusicBlocklist = e;
  },
  98,
);
