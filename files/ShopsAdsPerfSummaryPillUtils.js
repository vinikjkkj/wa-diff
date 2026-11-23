__d(
  "ShopsAdsPerfSummaryPillUtils",
  [
    "fbt",
    "meta-brand-bar-chart-star-top-filled-12",
    "meta-brand-person-circle-filled-12",
    "meta-brand-storefront-filled-12",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "optimized-ads"
        ? {
            icon: o("meta-brand-bar-chart-star-top-filled-12")
              .metaBrandBarChartStarTopFilled12,
            value: s._(/*BTDS*/ ""),
            tooltip: function () {
              return s._(/*BTDS*/ "", [
                s._param("blankLine", u.jsx("br", {})),
                s._param(
                  "bold",
                  u.jsx("strong", { children: "Maximize business outcomes" }),
                ),
                s._param("newLine", u.jsx("br", {})),
              ]);
            },
          }
        : e === "purchase-insights"
          ? {
              icon: o("meta-brand-person-circle-filled-12")
                .metaBrandPersonCircleFilled12,
              value: s._(/*BTDS*/ ""),
              tooltip: function () {
                return s._(/*BTDS*/ "", [
                  s._param("blankLine", u.jsx("br", {})),
                  s._param(
                    "bold",
                    u.jsx("strong", {
                      children: "Effectively reach key audiences",
                    }),
                  ),
                  s._param("newLine", u.jsx("br", {})),
                ]);
              },
            }
          : e === "seamless-experience"
            ? {
                icon: o("meta-brand-storefront-filled-12")
                  .metaBrandStorefrontFilled12,
                value: s._(/*BTDS*/ ""),
                tooltip: function () {
                  return s._(/*BTDS*/ "", [
                    s._param("blankLine", u.jsx("br", {})),
                    s._param(
                      "bold",
                      u.jsx("strong", {
                        children: "Drive sales and improve performance",
                      }),
                    ),
                    s._param("newLine", u.jsx("br", {})),
                  ]);
                },
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.getPillData = c;
  },
  226,
);
