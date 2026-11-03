__d(
  "WAWebMuseGroupNuxDebug",
  ["WALogger", "WAWebBotTos", "WAWebBotTosIds", "WAWebTos", "WAWebTosJob"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = {
        deleted: "server delete ok",
        failed: "server delete FAILED",
        skipped_on_prod: "server delete skipped on prod",
      };
    async function m() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds(),
        t = e.map(function (e) {
          return o("WAWebTos").TosManager.getState(e);
        }),
        n = await h(e);
      return e.map(function (e, r) {
        var o;
        return {
          noticeId: e,
          deviceState: t[r],
          serverAccepted:
            (o = n == null ? void 0 : n.includes(e)) != null ? o : null,
        };
      });
    }
    async function p() {
      var t = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      if (t.length === 0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[resetMuseGroupNux] no Muse group notice ids configured",
              ])),
          ),
          []
        );
      var n = await Promise.all(t.map(g));
      t.forEach(function (e) {
        o("WAWebTos").TosManager.resetState(e);
      });
      var r = await h(t);
      return t.map(function (e, t) {
        var a,
          i = {
            noticeId: e,
            serverDelete: n[t],
            serverDeleteFailed: n[t] === "failed",
            serverAcceptedAfter:
              (a = r == null ? void 0 : r.includes(e)) != null ? a : null,
          };
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[resetMuseGroupNux] ",
                "",
              ])),
            f(i),
          ),
          i
        );
      });
    }
    function _(e) {
      return (
        e.noticeId +
        ": device " +
        e.deviceState +
        ", serverAccepted=" +
        String(e.serverAccepted)
      );
    }
    function f(e) {
      return (
        e.noticeId +
        ": " +
        d[e.serverDelete] +
        ", serverAcceptedAfter=" +
        String(e.serverAcceptedAfter)
      );
    }
    async function g(e) {
      try {
        return await o("WAWebTosJob").deleteTosState(e);
      } catch (t) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[resetMuseGroupNux] ",
                ": server delete threw ",
                "",
              ])),
            e,
            String(t),
          ),
          "failed"
        );
      }
    }
    async function h(e) {
      if (e.length === 0) return [];
      try {
        return await o("WAWebBotTos").queryServerAcceptedNoticeIds(e);
      } catch (e) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[MuseGroupNuxDebug] server query failed: ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    ((l.getMuseGroupNuxState = m),
      (l.resetMuseGroupNux = p),
      (l.formatMuseGroupNuxState = _),
      (l.formatMuseGroupNuxResetResult = f));
  },
  98,
);
