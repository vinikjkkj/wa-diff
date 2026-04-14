__d(
  "WAWebMetaAICategories.react",
  [
    "WALogger",
    "WAWebMetaAIActionPills.react",
    "WAWebMetaAILandingConstants",
    "WAWebMetaAISuggestionPrompts.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(t) {
      var n = t.onPromptSelect,
        a = c(null),
        i = a[0],
        l = a[1],
        s = function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMetaAICategories] category selected=",
                "",
              ])),
            n,
          ),
            l(n));
        },
        d = function () {
          l(null);
        },
        m = function (t) {
          (n(t), l(null));
        };
      return u.jsx("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 xh8yej3",
        children:
          i == null
            ? u.jsx(r("WAWebMetaAIActionPills.react"), {
                categories: o("WAWebMetaAILandingConstants").CATEGORIES,
                onCategorySelect: s,
              })
            : u.jsx(r("WAWebMetaAISuggestionPrompts.react"), {
                categoryId: i,
                onPromptSelect: m,
                onDismiss: d,
              }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
