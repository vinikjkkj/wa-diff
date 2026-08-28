__d(
  "getIsEligibleHighAdminCountPage",
  ["QE2Logger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        (e == null
          ? void 0
          : e.is_eligible_for_biz_rtc_with_more_than_5_admins) !== !0
          ? !1
          : (t &&
              o("QE2Logger").logExposureForPage(
                "call_prompt_high_admin_page_id_universe",
                e.id,
              ),
            e.pass_call_prompt_high_admin_qe === !0)
      );
    }
    l.default = e;
  },
  98,
);
