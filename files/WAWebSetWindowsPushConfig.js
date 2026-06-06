__d(
  "WAWebSetWindowsPushConfig",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("setPushConfig", function (t) {
        if (!t.hasChild("error")) {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "setPushConfig: success",
                ])),
            )
            .tags("push-notification");
          return;
        }
        var n = t.child("error"),
          r = n.attrInt("code"),
          a = n.attrString("text");
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "setPushConfig: server response with ",
                  ", ",
                  "",
                ])),
              r,
              a,
            )
            .tags("push-notification"),
          { errorCode: r, errorText: a }
        );
      });
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "uwp_beta");
          var n = o("WAWap").wap(
              "iq",
              {
                to: o("WAWap").S_WHATSAPP_NET,
                type: "set",
                xmlns: "urn:xmpp:whatsapp:push",
                id: o("WAWap").generateId(),
              },
              o("WAWap").wap("config", {
                id: o("WAWap").CUSTOM_STRING(e),
                platform: "wns",
                version: m(t),
              }),
            ),
            r = yield o("WADeprecatedSendIq").deprecatedSendIq(n, u);
          if (!r.success) {
            var a = r.errorCode,
              i = r.errorText;
            return { errorCode: a, errorText: i };
          }
          return r.result;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e === "uwp_hybrid_dogfooding"
        ? "uwp_hybrid_dogfooding"
        : e === "uwp_alpha"
          ? "uwp_alpha"
          : e === "uwp_beta"
            ? "uwp_beta"
            : e === "uwp_public"
              ? o("WAWap").DROP_ATTR
              : e === "uwp_hybrid_dogfooding"
                ? "uwp_hybrid_dogfooding"
                : "uwp_beta";
    }
    l.setWindowsPushConfig = c;
  },
  98,
);
