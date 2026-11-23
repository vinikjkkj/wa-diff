__d(
  "adsBulkEditDialogTypeVisibilitySelector",
  [
    "AdsBulkEditMenuItems",
    "AdsBulkEditSelectors",
    "adsBulkEditValidationInputSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [
            r("adsBulkEditValidationInputSelector")[e],
            r("AdsBulkEditSelectors").bulkEditDialogTypeSelector[e],
          ],
          function (n, o) {
            var t = r("AdsBulkEditMenuItems")[e][o];
            if (!t) return { isVisible: !0, disabledText: null };
            var a = n.shouldDisable || t.isDisabled(n),
              i = t.isHidden ? t.isHidden(n) : !1;
            return {
              isVisible: !a && !i,
              disabledText: t.getTooltip ? t.getTooltip(n) : null,
            };
          },
          { name: i.id },
        );
      }),
      s = e;
    l.default = s;
  },
  98,
);
