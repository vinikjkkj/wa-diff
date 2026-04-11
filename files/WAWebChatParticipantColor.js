__d(
  "WAWebChatParticipantColor",
  [
    "WALogger",
    "WAMd5",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "lodash",
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
    function m(t, n, a) {
      var i = o("WAWebStateUtils").unproxy(t);
      if (o("WAWebContactGetters").getIsNewsletter(i)) return 1;
      if (n == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "received a null sender wid when getting assigned color-",
                  "",
                ])),
              a,
            )
            .tags("messaging")
            .sendLogs("unexpected null sender wid for getting assigned color"),
          1
        );
      var l = i.colors || (i.colors = u(i)),
        s,
        d = o("WAMd5").md5(c(n).toString());
      if ((s = l[d])) return s;
      var m = {};
      r("lodash").forOwn(l, function (e, t) {
        m[e] ? m[e].push(t) : (m[e] = [t]);
      });
      for (var p = Number.POSITIVE_INFINITY, _ = 17, f = 1; f <= _; f++)
        if (m[f]) m[f].length < p && ((p = m[f].length), (s = f));
        else {
          s = f;
          break;
        }
      return ((l[d] = s), i.saveAssignedColorsDebounced(), s);
    }
    ((l.saveAssignedColors = d), (l.getAssignedColor = m));
  },
  98,
);
