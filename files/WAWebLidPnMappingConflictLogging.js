__d(
  "WAWebLidPnMappingConflictLogging",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebGetPlatformFromStanzaId",
    "WAWebWidDevTools",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t;
      return e != null
        ? (t = o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(e)) !=
          null
          ? t
          : "unknown"
        : "n/a";
    }
    function d(e, t) {
      if (e == null) return "";
      var n = e.user,
        r = t.user;
      return r.length > n.length && r.endsWith(n)
        ? "-new-pn-extra-prefix"
        : n.length > r.length && n.endsWith(r)
          ? "-cached-pn-extra-prefix"
          : "";
    }
    function m(t) {
      var n = t.cachedPnForMappingLid,
        r = t.learningSource,
        a = t.mappingLid,
        i = t.mappingPn,
        l = t.sourceStanzaId,
        m = c(l),
        p =
          o("WAWebApiContact").lidPnCache.getPhoneNumber(
            o("WAWebWidFactory").createUserLidOrThrow(i.user, "lid"),
          ) != null;
      if (p) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] new PN ",
                " is actually a LID src ",
                " sender ",
                "",
              ])),
            i,
            r,
            m,
          )
          .sendLogs("lid-pn-mapping-conflict-pn-is-lid");
        return;
      }
      if (o("WAWebWidDevTools").isWidClientAssigned(a)) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] fake LID ",
                " cached PN ",
                " != new PN ",
                " sender ",
                "",
              ])),
            a,
            n,
            i,
            m,
          )
          .sendLogs("lid-pn-mapping-conflict-fake-lid-" + r);
        return;
      }
      var _ = d(n, i);
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[createLidPnMappings] LID ",
              " cached PN ",
              " != new PN ",
              " sender ",
              "",
            ])),
          a,
          n,
          i,
          m,
        )
        .sendLogs("lid-pn-mapping-conflict-" + r + _);
    }
    ((l.getExtraPrefixReasonSuffix = d), (l.logLidPnMappingConflict = m));
  },
  98,
);
