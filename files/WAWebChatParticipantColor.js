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
      var t,
        n,
        r = o("WAWebStateUtils").unproxy(e);
      if (r.colors) {
        var a =
            (t = (n = r.groupMetadata) == null ? void 0 : n.participants) !=
            null
              ? t
              : [],
          i = r.colors,
          l = Array.from(
            new Set(Object.keys(i)).difference(
              new Set(
                a
                  .map(function (e) {
                    return e.id.toString();
                  })
                  .map(o("WAMd5").md5),
              ),
            ),
          );
        (l.forEach(function (e) {
          delete i[e];
        }),
          l.length && r.saveAssignedColorsDebounced());
      }
    }
    function u(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        t.groupMetadata &&
          t.listenTo(t.groupMetadata.participants, "remove reset", s),
        o("WAWebUserPrefsGeneral").getGroupParticipantAssignedColor(t.id)
      );
    }
    function c(e) {
      if (e.isUser()) {
        var t;
        return (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e;
      }
      return e;
    }
    function d(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.colors;
      n && o("WAWebUserPrefsGeneral").setGroupParticipantAssignedColor(t.id, n);
    }
    function m(t, n, r) {
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
      var i = a.colors || (a.colors = u(a)),
        l,
        s = o("WAMd5").md5(c(n).toString());
      if ((l = i[s])) return l;
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
      return ((i[s] = l), a.saveAssignedColorsDebounced(), l);
    }
    ((l.saveAssignedColors = d), (l.getAssignedColor = m));
  },
  98,
);
