__d(
  "WAAbPropsSync",
  [
    "WAAbProps",
    "WAAbPropsHelpers",
    "WAGetAbPropsProtocol",
    "WALogger",
    "WAPromiseManagement",
    "WAResultOrError",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WAPromiseManagement").cacheWhilePending(function () {
        return "abProps";
      }, m);
    function m(e) {
      var t = e.sendHash,
        n = t === void 0 ? !0 : t;
      return n == null || n === !1
        ? p(null)
        : o("WAAbProps")
            .getHash()
            .then(function (e) {
              return p(e);
            });
    }
    async function p(t) {
      var n = await o("WAGetAbPropsProtocol").getAbPropsProtocol({
        propsHash: t,
      });
      if (!n.success)
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "fetchAbProps failed",
            ])),
        );
      else {
        var r = n.value,
          a = r.abKey,
          i = r.hash,
          l = r.props,
          u = r.refresh,
          c = o("WAAbPropsHelpers").parseAbProps(o("WAAbProps").getConfig(), l),
          d = await _(a, i, u, c);
        d.success === !1 &&
          (d.error,
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncAbProps: detected no hash",
              ])),
          ));
      }
      var m = await o("WAAbProps").getRefreshSecs();
      return { seconds: m };
    }
    async function _(e, t, n, r) {
      var a = await o("WAAbProps").getAbProps(),
        i = {
          abKey: e != null ? e : a.abKey,
          hash: t != null ? t : a.hash,
          refresh: o("WAAbPropsHelpers").maybeUpdateRefresh(n),
          lastSyncTime: o("WATimeUtils").unixTime(),
          propValues: a.propValues,
          propExpoKeys: a.propExpoKeys,
          internalExpoKeys: a.internalExpoKeys,
          expoKeyStr: a.expoKeyStr,
        };
      if (t == null)
        return (
          await o("WAAbProps").setAbProps(i),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAAbProps.update: detected no hash",
              ])),
          ),
          o("WAResultOrError").makeError("noHash")
        );
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "WAAbProps.update: updating ab configs",
          ])),
      );
      var l = r.expoKeys,
        s = r.values,
        d = o("WAAbPropsHelpers").maybeUpdatePropValues(
          s,
          a.propValues,
          o("WAAbProps").getConfig(),
        ),
        m = o("WAAbPropsHelpers").maybeUpdateExpoKeys(
          l,
          a.propExpoKeys,
          o("WAAbProps").getConfig(),
        ),
        p = m.expoKeysToDelete,
        _ = m.propExpoKeys,
        f,
        g,
        h = o("WAAbPropsHelpers").maybeUpdateInternalExpoKeys(
          p,
          a.internalExpoKeys,
        );
      return (
        h != null && ((f = h.internalExpoKeys), (g = h.expoKeyStr)),
        await o("WAAbProps").setAbProps(
          babelHelpers.extends({}, i, {
            propValues: d,
            propExpoKeys: _,
            internalExpoKeys: f,
            expoKeyStr: g,
          }),
        ),
        o("WAResultOrError").makeResult()
      );
    }
    l.syncAbProps = d;
  },
  98,
);
