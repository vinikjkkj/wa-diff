__d(
  "WAWebChatParticipantColor",
  [
    "WALogger",
    "WAMd5",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebUserPrefsGeneral").getGroupParticipantAssignedColor(t.id);
    }
    function u(e) {
      if (e.isUser()) {
        var t;
        return (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e;
      }
      return e;
    }
    function c(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.colors;
      n && o("WAWebUserPrefsGeneral").setGroupParticipantAssignedColor(t.id, n);
    }
    function d(t, n, r) {
      var a = o("WAWebStateUtils").unproxy(t);
      if (o("WAWebContactGetters").getIsNewsletter(a)) return 1;
      if (n == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "received a null sender wid when getting assigned color-",
                  "",
                ])),
              r,
            )
            .tags("messaging")
            .sendLogs("unexpected null sender wid for getting assigned color"),
          1
        );
      var i = a.colors || (a.colors = s(a)),
        l,
        c = o("WAMd5").md5(u(n).toString());
      if ((l = i[c])) return l;
      var d = {};
      Object.entries(i).forEach(function (e) {
        var t = e[0],
          n = e[1];
        d[n] ? d[n].push(t) : (d[n] = [t]);
      });
      for (var m = Number.POSITIVE_INFINITY, p = 17, _ = 1; _ <= p; _++)
        if (d[_]) d[_].length < m && ((m = d[_].length), (l = _));
        else {
          l = _;
          break;
        }
      return ((i[c] = l), a.saveAssignedColorsDebounced(), l);
    }
    ((l.saveAssignedColors = c), (l.getAssignedColor = d));
  },
  98,
);
