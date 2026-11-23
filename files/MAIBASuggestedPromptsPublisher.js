__d(
  "MAIBASuggestedPromptsPublisher",
  [
    "AdsALChannel",
    "AdsPerfInteractionsController",
    "gkx",
    "hyperionChannel",
    "hyperionTestAndSet",
    "hyperionTimedTrigger",
    "isMAIBAChatOpen",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("hyperionChannel").Channel),
      s = new e(),
      u = { CAMPAIGN_GROUP: "campaign", CAMPAIGN: "ad set", ADGROUP: "ad" },
      c = new RegExp(
        "\\/am\\/table\\/table_row:(?<assetID>\\d+)(?:[A-Za-z_|][^/]*)?\\/table_cell:forObjectType\\((?<column>\\w+),(?<objtype>CAMPAIGN_GROUP|CAMPAIGN|ADGROUP)\\)",
      ),
      d = [
        {
          surfacePattern: c,
          promptGetter: function (t) {
            var e,
              n,
              r = (e = t.groups) != null ? e : {},
              o = r.assetID,
              a = r.column,
              i = r.objtype;
            if (o == null || a == null || i == null) return null;
            var l = (n = u[i]) != null ? n : "asset",
              s = l + " " + o,
              c = ["Is " + s + " doing well?", "Is " + s + " active?"];
            switch (a) {
              case "name":
                c.push("What is " + s + " called?");
                break;
              case "budget":
                c.push("Should I increase the budget of " + s + "?");
                break;
              case "delivery":
              case "bid":
              case "reach":
              case "objective":
              case "cost_per_result":
                c.push("Explain the " + a + " of " + s);
                break;
            }
            return c;
          },
        },
        {
          surfacePattern: new RegExp("\\/table\\/table_tab:(?<objtype>\\w+)"),
          promptGetter: function (t) {
            var e,
              n = (e = t.groups) != null ? e : {},
              r = n.objtype;
            if (r == null) return null;
            var o = [
              "how should I organize my data in " +
                r +
                " tab to get the most out of it?",
            ];
            return o;
          },
        },
        {
          surfacePattern: /\/table\/search_and_filter/,
          promptGetter: function (t) {
            var e = [
              "how should I take advantage of search and filter feature in table view?",
            ];
            return e;
          },
        },
        {
          surfacePattern: /\/table\/.*toolbar/,
          promptGetter: function (t) {
            var e = ["explain features of the table toolbar"];
            return e;
          },
        },
        {
          surfacePattern: new RegExp("\\/navigation_tools\\/lbl:(?<tool>\\w+)"),
          promptGetter: function (t, n) {
            var e,
              r,
              o = (e = t.groups) != null ? e : {},
              a = o.tool,
              i = (r = n.getElements()[0]) == null ? void 0 : r.textContent,
              l = i != null ? i : a;
            if (l == null) return null;
            var s = ["what is '" + l + "' for under navigation tools?"];
            return s;
          },
        },
        {
          surfacePattern: /\/am\/creation_modal/,
          promptGetter: function (t, n, r) {
            var e = r.elementName,
              o = [
                "which campaign objective has worked best for me in the past?",
              ];
            return (
              e != null &&
                e.length < 20 &&
                o.push(
                  "Have I gotten good results from '" +
                    e +
                    "' campaign objective?",
                ),
              o
            );
          },
        },
        {
          surfacePattern: new RegExp(
            "\\/editor:(?<objtype>\\w+)\\/campaign_budget_section",
          ),
          promptGetter: function (t, n, r) {
            var e = r.element,
              o = ["what budget value do you suggest for this campain?"];
            if (e != null && e instanceof HTMLInputElement) {
              var a = e.value;
              a != null &&
                o.push("Is budget " + a + " sufficient for this campain?");
            }
            return o;
          },
        },
      ];
    function m(e, t) {
      var n = e.surface;
      for (var r of d) {
        var o = r.promptGetter,
          a = r.surfacePattern,
          i = n.match(a);
        if (i != null) {
          var l = o(i, e, t);
          if (l != null) return l;
        }
      }
      return null;
    }
    function p(e) {
      var t = e.surfaceData;
      if (t != null) {
        var n = m(t, e);
        n != null ? s.emit("multi_prompt", n) : s.emit("single_prompt", null);
      }
    }
    function _(e) {
      var t = e.surface;
      t != null && s.emit("single_prompt", null);
    }
    var f = new (o("hyperionTestAndSet").TestAndSet)();
    function g() {
      if (!f.testAndSet()) {
        var e = null,
          t;
        o("AdsALChannel").AdsALChannel.addListener("al_ui_event", function (n) {
          if (
            !(r("gkx")("8714") && !r("isMAIBAChatOpen")()) &&
            !(n.surface != null && /help_center/.test(n.surface)) &&
            !(
              r("gkx")("10166") &&
              r("AdsPerfInteractionsController").getAllOngoingInteraction()
                .size > 0
            ) &&
            !(
              r("gkx")("9552") &&
              r("AdsPerfInteractionsController")
                .getAllOngoingInteraction()
                .has("am.toast_card.video_upload")
            )
          )
            switch (n.event) {
              case "mouseover": {
                var a, i;
                if ((a = n.domEvent) != null && a.ctrlKey) break;
                ((i = e) == null ? void 0 : i.surface) !== n.surface &&
                  ((e = n),
                  (t = new (o("hyperionTimedTrigger").TimedTrigger)(
                    function () {
                      e != null && p(e);
                    },
                    500,
                  )));
                break;
              }
              case "click": {
                var l;
                ((e = null), (l = t) == null || l.cancel(), _(n));
                break;
              }
              default:
                break;
            }
        });
      }
    }
    ((l.MAIBASuggestedPrompts = s),
      (l.AdsManagerRowCellPattern = c),
      (l.init = g));
  },
  98,
);
