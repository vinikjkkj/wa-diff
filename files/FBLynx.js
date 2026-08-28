__d(
  "FBLynx",
  ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e || (e = n("URI"))).goURIOnWindow,
      s = {
        alreadySetup: !1,
        setupDelegation: function (r) {
          if ((r === void 0 && (r = !1), !!document.documentElement)) {
            if (document.body == null) {
              if (r) return;
              window.setTimeout(function () {
                s.setupDelegation(!0);
              }, 100);
              return;
            }
            if (!s.alreadySetup) {
              s.alreadySetup = !0;
              var t = function (r) {
                var t = s.getMaybeLynxLink(r.target);
                if (t) {
                  var o = t[0],
                    a = t[1],
                    i = a,
                    u = new (e || (e = n("URI")))(a.href),
                    c;
                  if (
                    n("LinkshimHandlerConfig").ghl_param_link_shim &&
                    o !== "hover"
                  ) {
                    var d,
                      m = (d = a.dataset) == null ? void 0 : d.attributes;
                    if (
                      m != null &&
                      m !== "" &&
                      ((c = n("Base64").decodeObject(m)), c && c.open_link)
                    ) {
                      var p;
                      for (p in c) p !== "open_link" && u.addQueryData(p, c[p]);
                      var _ = a.cloneNode(!0);
                      ((_.href = u.toString()), (i = _));
                    }
                  }
                  switch (o) {
                    case "async":
                    case "asynclazy":
                      n("FBLynxBase").logAsyncClick(i);
                      break;
                    case "origin":
                      n("FBLynxBase").originReferrerPolicyClick(i);
                      break;
                    case "hover":
                      s.hoverClick(i);
                      break;
                  }
                  n("LinkshimHandlerConfig").ghl_param_link_shim &&
                    o !== "hover" &&
                    c &&
                    c.open_link &&
                    (r.preventDefault(), l(u, window.open("", i.target), !0));
                }
              };
              (n("Event").listen(document.body, "click", t),
                n("LinkshimHandlerConfig").middle_click_requires_event &&
                  n("Event").listen(document.body, "mouseup", function (e) {
                    e.button == 1 && t(e);
                  }),
                n("Event").listen(document.body, "mouseover", function (e) {
                  var t = s.getMaybeLynxLink(e.target);
                  if (t) {
                    var n = t[0],
                      r = t[1];
                    switch (n) {
                      case "async":
                      case "asynclazy":
                      case "origin":
                      case "hover":
                        s.mouseover(r);
                        break;
                    }
                  }
                }),
                n("Event").listen(document.body, "contextmenu", function (e) {
                  var t = s.getMaybeLynxLink(e.target);
                  if (t) {
                    var n = t[0],
                      r = t[1];
                    switch (n) {
                      case "async":
                      case "hover":
                      case "origin":
                        s.contextmenu(r);
                        break;
                      case "asynclazy":
                        break;
                    }
                  }
                }));
            }
          }
        },
        getMaybeLynxLink: function (t) {
          var e = n("Parent").byAttribute(t, "data-lynx-mode");
          if (e instanceof HTMLAnchorElement) {
            var r = e.getAttribute("data-lynx-mode");
            switch (r) {
              case "async":
              case "asynclazy":
              case "hover":
              case "origin":
                return [r, e];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (t) {
          n("FBLynxBase").revertSwapIfLynxURIPresent(t);
        },
        mouseover: function (t) {
          n("FBLynxBase").swapLinkWithUnshimmedLink(t);
        },
        contextmenu: function (t) {
          n("FBLynxBase").revertSwapIfLynxURIPresent(t);
        },
      };
    a.exports = s;
  },
  null,
);
