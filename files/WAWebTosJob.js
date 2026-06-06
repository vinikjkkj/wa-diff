__d(
  "WAWebTosJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 7200,
      s = 259200,
      u = 86400,
      c = new (r("WADeprecatedWapParser"))("tosNotices", function (t) {
        (t.assertTag("iq"), t.assertFromServer());
        var n = t.child("tos"),
          r = { refresh: n.attrInt("refresh"), notice: [] };
        return (
          n.forEachChildWithTag("notice", function (e) {
            var t = e.maybeAttrString("state") !== "false",
              n = e.attrString("id");
            r.notice.push({ id: n, state: t });
          }),
          (r.refresh > s || r.refresh < e) && (r.refresh = u),
          r
        );
      });
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = o("WAWap")).wap(
              "iq",
              {
                xmlns: "tos",
                id: t.generateId(),
                type: "get",
                to: t.S_WHATSAPP_NET,
              },
              t.wap(
                "request",
                null,
                e.map(function (e) {
                  return o("WAWap").wap("notice", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              ),
            ),
            r = yield o("WADeprecatedSendIq").deprecatedSendIq(n, c);
          if (r.success) return r.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            r.errorCode,
            r.errorText,
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("gkx")("26258")) {
            var t,
              n = new (r("WADeprecatedWapParser"))(
                "tosNoticesDebug",
                r("WAWebNoop"),
              ),
              a = (t = o("WAWap")).wap(
                "iq",
                {
                  xmlns: "tos",
                  id: t.generateId(),
                  type: "set",
                  to: t.S_WHATSAPP_NET,
                },
                t.wap("delete", { id: e }),
              );
            yield o("WADeprecatedSendIq").deprecatedSendIq(a, n);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = new (r("WADeprecatedWapParser"))(
              "tosNoticesSet",
              r("WAWebNoop"),
            ),
            a = (t = o("WAWap")).wap(
              "iq",
              {
                xmlns: "tos",
                id: t.generateId(),
                type: "set",
                to: t.S_WHATSAPP_NET,
              },
              t.wap(
                "request",
                { type: "session_update" },
                e.map(function (e) {
                  return o("WAWap").wap("notice", {
                    id: o("WAWap").CUSTOM_STRING(e),
                  });
                }),
              ),
            );
          yield o("WADeprecatedSendIq").deprecatedSendIq(a, n);
        })),
        g.apply(this, arguments)
      );
    }
    ((l.DEFAULT_TOS_REFRESH_INTERVAL = u),
      (l.queryTosState = d),
      (l.deleteTosState = p),
      (l.updateTosState = f));
  },
  98,
);
