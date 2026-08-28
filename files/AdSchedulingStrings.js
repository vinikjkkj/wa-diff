__d(
  "AdSchedulingStrings",
  ["fbt", "GeoBadge.react", "GeoLink.react", "gkx", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Start date"),
      d = s._(/*BTDS*/ "End date");
    function m(e) {
      return r("gkx")("13145")
        ? e
          ? s._(
              /*BTDS*/ "Choose to deliver your ad and marketing messages during a specific time period.",
            )
          : s._(
              /*BTDS*/ "Choose to deliver your ad during a specific time period.",
            )
        : s._(/*BTDS*/ "Choose to run your ad during a specific time period.");
    }
    var p = s._(/*BTDS*/ "Set an end date"),
      _ = s._(/*BTDS*/ "Remove schedule"),
      f = s._(/*BTDS*/ "Running on campaign schedule"),
      g = s._(/*BTDS*/ "Running on ad set schedule"),
      h = s._(/*BTDS*/ "Ongoing");
    function y(e, t, n, r) {
      if (t == null && e == null) return r ? g : f;
      var o = h,
        a = h;
      return (
        e != null &&
          (o = s._(/*BTDS*/ "{start_date}", [
            s._param("start_date", e == null ? void 0 : e.format("M j, Y")),
          ])),
        t != null &&
          (a = s._(/*BTDS*/ "{end_date}", [
            s._param("end_date", t == null ? void 0 : t.format("M j, Y")),
          ])),
        e == null &&
          t != null &&
          (o = s._(/*BTDS*/ "{start_date}", [
            s._param("start_date", n == null ? void 0 : n.format("M j, Y")),
          ])),
        s._(/*BTDS*/ "{start_date} - {end_date}", [
          s._param("start_date", o),
          s._param("end_date", a),
        ])
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = s._(/*BTDS*/ "Edit start date"),
      b = s._(/*BTDS*/ "Edit end date"),
      v = s._(
        /*BTDS*/ "You cannot edit an ad's start time after it has started running.",
      ),
      S = s._(/*BTDS*/ "Ad set schedules don\u2019t match"),
      R = s._(/*BTDS*/ "Turn off ad set budget sharing"),
      L = s._(
        /*BTDS*/ "Lifetime budgets cannot be shared across different schedules. Turn off ad set budget sharing or update the start and end to the same calendar day across all ad sets.",
      ),
      E = s._(
        /*BTDS*/ "Lifetime budgets cannot be shared across different schedules. Match all other ad sets to this schedule or turn off budget sharing.",
      ),
      k = s._(/*BTDS*/ "Match this schedule"),
      I = s._(/*BTDS*/ "Updated ad set schedules to match"),
      T = s._(/*BTDS*/ "Unselected ad set budget sharing"),
      D = s._(/*BTDS*/ "Your changes have been applied for all ad sets");
    function x(e, t) {
      return e
        ? s._(
            /*BTDS*/ "Changing the ad set schedule may also change the start and end dates of ads with individual schedules. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx("div", {
                  className: "x1xmf6yo",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("GeoLink.react"), {
                        onClick: t,
                        children: s._(/*BTDS*/ "Undo"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "Changing the campaign schedule may also change the start and end dates of ads with individual schedules. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx("div", {
                  className: "x1xmf6yo",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("GeoLink.react"), {
                        onClick: t,
                        children: s._(/*BTDS*/ "Undo"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    var $ = s._(/*BTDS*/ "Edit schedule for all selected ads");
    function P(e, t) {
      return s._(/*BTDS*/ "{=m0} {preview text}", [
        s._param("preview text", t),
        s._implicitParam(
          "=m0",
          u.jsx(r("GeoBadge.react"), {
            label: "number of ads in the group",
            value: e,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      return e
        .filter(function (e) {
          return e != null;
        })
        .map(function (e) {
          return s._(/*BTDS*/ "{=m0}", [
            s._implicitParam(
              "=m0",
              u.jsx("div", {
                children: s._(/*BTDS*/ "{ad name}", [s._param("ad name", e)]),
              }),
            ),
          ]);
        });
    }
    var M = s._(/*BTDS*/ "Show more schedules"),
      w = s._(/*BTDS*/ "Ongoing"),
      A = s._(/*BTDS*/ "End on"),
      F = s._(/*BTDS*/ "Select end date");
    function O(e) {
      return s._(
        /*BTDS*/ "{start\/end date month day year} at {start\/end date time}",
        [
          s._param("start/end date month day year", e.format("l, M j, Y")),
          s._param(
            "start/end date time",
            e == null ? void 0 : e.format("g:ia"),
          ),
        ],
      );
    }
    O.displayName = O.name + " [from " + i.id + "]";
    var B = s._(
        /*BTDS*/ "You cannot choose a new start time within the next 15 minutes because it is too close to the current start time. Choose a time more than 15 minutes from now.",
      ),
      W = s._(
        /*BTDS*/ "You cannot choose an end time within the next 15 minutes because it is too close to the current end time. Choose a time more than 15 minutes from now.",
      );
    function q(e) {
      return s._(
        /*BTDS*/ "This start date is later than your end date. Choose a date on or before your end date of {end date}.",
        [s._param("end date", e == null ? void 0 : e.format("M j, Y"))],
      );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U(e, t) {
      return e
        ? s._(
            /*BTDS*/ "This start date is outside of your ad set's schedule. Choose a date on or after your ad set's start date of {end date}.",
            [s._param("end date", t == null ? void 0 : t.format("M j, Y"))],
          )
        : s._(
            /*BTDS*/ "This start date is outside of your campaign's schedule. Choose a date on or after your campaign's start date of {end date}.",
            [s._param("end date", t == null ? void 0 : t.format("M j, Y"))],
          );
    }
    function V(e, t) {
      return e
        ? s._(
            /*BTDS*/ "This end date is outside of your ad set's schedule. Choose a date on or before your ad set's end date of {end date}.",
            [s._param("end date", t == null ? void 0 : t.format("M j, Y"))],
          )
        : s._(
            /*BTDS*/ "This end date is outside of your campaign's schedule. Choose a date on or before your campaign's end date of {end date}.",
            [s._param("end date", t == null ? void 0 : t.format("M j, Y"))],
          );
    }
    var H = s._(/*BTDS*/ "Your ad schedule must be 30 minutes or longer.");
    ((l.START_DATE_LABEL = c),
      (l.END_DATE_LABEL = d),
      (l.getAdsScheduleFieldDescription = m),
      (l.AD_SCHEDULE_SET_END_DATE_LABEL = p),
      (l.AD_SCHEDULE_REMOVE_SCHEDULE_BUTTON_LABEL = _),
      (l.getAdSchedulePreviewText = y),
      (l.AD_SCHEDULE_EDIT_START_DATE_CTA = C),
      (l.AD_SCHEDULE_EDIT_END_DATE_CTA = b),
      (l.AD_SCHEDULE_START_DATE_DISABLED_REASON = v),
      (l.AD_FLEX_SCHEDULE_WARNING_CARD_HEADER = S),
      (l.AD_FLEX_SCHEDULE_WARNING_CARD_CTA_LABEL = R),
      (l.AD_FLEX_SCHEDULE_WARNING_CARD_TEXT = L),
      (l.AD_FLEX_SCHEDULE_WARNING_CARD_TEXT_WITH_MATCH_CTA = E),
      (l.AD_FLEX_SCHEDULE_MATCH_CTA_LABEL = k),
      (l.AD_FLEX_SCHEDULE_MATCH_SUCCESS_TOAST = I),
      (l.AD_FLEX_BUDGET_SHARING_OFF_SUCCESS_TOAST = T),
      (l.AD_FLEX_BUDGET_SHARING_CHANGES_APPLIED_TOAST_VARIANT = D),
      (l.getAdScheduleCampaignStartOrEndDateEditWarning = x),
      (l.AD_SCHEDULE_EDIT_ALL_ADS_CHECKBOX_LABEL = $),
      (l.getAdScheduleBulkEditGroupHeader = P),
      (l.getAdNamesTooltipContent = N),
      (l.AD_SCHEDULE_SHOW_MORE_SCHEDULES_TEXT = M),
      (l.ONGOING_LABEL = w),
      (l.END_ON_LABEL = A),
      (l.END_DATE_SELECTOR_LABEL = F),
      (l.getAdScheduleReviewViewContent = O),
      (l.AD_SCHEDULE_STARTING_TOO_SOON_ERROR_MESSAGE = B),
      (l.AD_SCHEDULE_ENDING_TOO_SOON_ERROR_MESSAGE = W),
      (l.getAdScheduleStartTimeMustBeBeforeEndTimeError = q),
      (l.getAdScheduleStartTimeOutsideCampaignScheduleError = U),
      (l.getAdScheduleEndTimeOutsideCampaignScheduleError = V),
      (l.AD_SCHEDULE_DURATION_TOO_SHORT_ERROR_MESSAGE = H));
  },
  226,
);
