__d(
  "WAWebBizBroadcastTos",
  [
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebTos",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "20250915",
      s = 160,
      u = null;
    function c() {
      return (u == null && ((u = !1), m()), e);
    }
    function d() {
      return o("WAWebTos").TosManager.getState(c()) === "ACCEPTED" || u === !0;
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WATimeUtils").unixTime(),
            n = yield o(
              "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
            ).sendGetDisclosureStageByIdsRPC({
              getDisclosureStageByIdArgs: [
                {
                  getDisclosureStageByIdId: Number(e),
                  getDisclosureStageByIdT: t,
                },
              ],
            });
          if (n.name === "GetDisclosureStageByIdsResponseClientSuccess") {
            var r = n.value.notice.find(function (t) {
              return t.id === Number(e);
            });
            r != null &&
              (r.stage === s ||
                r.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED) &&
              ((u = !0),
              o("WAWebTos").TosManager.setState(
                c(),
                "ACCEPTED",
                o("WATimeUtils").unixTime(),
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
            Number(e),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          ),
            o("WAWebTos").TosManager.setState(
              c(),
              "ACCEPTED",
              o("WATimeUtils").unixTime(),
            ));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getBizBroadcastTosId = c),
      (l.isBizBroadcastTosAccepted = d),
      (l.acceptBizBroadcastTos = _));
  },
  98,
);
