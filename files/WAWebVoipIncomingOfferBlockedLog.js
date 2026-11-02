__d(
  "WAWebVoipIncomingOfferBlockedLog",
  ["WALogger", "WAWebCoreActionsODS", "WAWebRuntimeEnvironmentUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 45e3,
      c = 256,
      d = new Set();
    function m(e, t, n) {
      if (o("WAWebRuntimeEnvironmentUtils").isWorker() || d.has(e)) return n;
      _(e);
      var r = !1,
        a = self.setTimeout(function () {
          ((r = !0), f("hung", "none", t));
        }, u),
        i = function (n, o) {
          (self.clearTimeout(a),
            r ? g(n, o, t) : n !== "available" && f(n, o, t));
        };
      return (
        n.then(
          function (e) {
            var t = e.availability,
              n = e.kind;
            return i(p(t), n);
          },
          function () {
            return i("failed", "none");
          },
        ),
        n
      );
    }
    function p(e) {
      return e === "available"
        ? "available"
        : e === "fallback"
          ? "fallback"
          : e === "reload_required"
            ? "held"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      if ((d.add(e), d.size > c)) {
        var t = d.values().next().value;
        t != null && d.delete(t);
      }
    }
    function f(t, n, r) {
      var a = r ? "1" : "0";
      (o("WAWebCoreActionsODS").logCallIncomingOfferBlocked(t),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: incoming offer blocked state=",
                " kind=",
                " group=",
                "",
              ])),
            t,
            n,
            a,
          )
          .tags("non-sad", "state:" + t, "kind:" + n, "group:" + a)
          .sendLogs("voip-incoming-offer-blocked", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          }));
    }
    function g(e, t, n) {
      var r = n ? "1" : "0";
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: incoming offer decided after the hung window outcome=",
              " kind=",
              " group=",
              "",
            ])),
          e,
          t,
          r,
        )
        .tags("non-sad", "state:" + e, "kind:" + t, "group:" + r)
        .sendLogs("voip-incoming-offer-late-decision", {
          sampling: 0,
          sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
        });
    }
    l.watchIncomingOfferDecision = m;
  },
  98,
);
