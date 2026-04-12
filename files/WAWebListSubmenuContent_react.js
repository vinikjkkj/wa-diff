__d(
  "WAWebListSubmenuContent.react",
  [
    "fbt",
    "WAWebBizLabelEditModal.react",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebEditLabelAssociationBridge",
    "WAWebFbtCommon",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSchemaLabel",
    "WAWebStateUtils",
    "WAWebWamEnumListAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcAdd.react",
    "WDSIconIcLabelFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSToast.react",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        labelIconColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
        contentsWrapper: { display: "xjp7ctv", $$css: !0 },
        inheritColor: { color: "x1heor9g", $$css: !0 },
      };
    function h() {
      return o("WAWebLabelCollection").LabelCollection.filter(function (e) {
        return e.isActive === !1 || e.name == null || e.name === ""
          ? !1
          : e.type !== o("WAWebSchemaLabel").ListType.UNREAD &&
              e.type !== o("WAWebSchemaLabel").ListType.GROUPS &&
              e.type !== o("WAWebSchemaLabel").ListType.COMMUNITY &&
              e.type !== o("WAWebSchemaLabel").ListType.FAVORITES;
      });
    }
    function y(t) {
      var n = t.chat,
        a = t.chatLabels,
        i = t.entryPoint,
        l = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS),
        u = l[0],
        d = l[1],
        y = o("WAWebListsGatingUtils").isListsEnabled(),
        C = o("WDSToast.react").useWDSToast(),
        b = C.showToast,
        v = f(function () {
          return h();
        }),
        S = v[0],
        R = v[1],
        L = f(function () {
          var e = new Set();
          return (
            a != null &&
              a.forEach(function (t) {
                return e.add(t);
              }),
            e
          );
        }),
        E = L[0],
        k = L[1],
        I = _([]),
        T = _(n),
        D = _(a);
      p(
        function () {
          var e = D.current,
            t = I.current,
            n = T.current;
          return function () {
            if (t.length !== 0) {
              var a = new Set(e != null ? e : []),
                i = new Set(a),
                l = new Map();
              for (var u of t)
                (l.set(u.id, u.listType),
                  u.type === "add" ? i.add(u.id) : i.delete(u.id));
              var c = [];
              for (var d of i)
                a.has(d) || c.push({ id: d, listType: l.get(d), type: "add" });
              for (var m of a)
                i.has(m) ||
                  c.push({ id: m, listType: l.get(m), type: "remove" });
              if (c.length !== 0) {
                var p = c.length,
                  _ = o("WAWebMobilePlatforms").isSMB()
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number} labels changed","_1":"1 label changed"}',
                        [s._plural(p, "number")],
                      )
                    : s._(
                        /*BTDS*/ '_j{"*":"{number} lists changed","_1":"1 list changed"}',
                        [s._plural(p, "number")],
                      );
                b({
                  type: "success",
                  message: _,
                  action: {
                    label: r("WAWebFbtCommon")("Undo"),
                    onPress: function () {
                      var e = c.map(function (e) {
                          return {
                            id: e.id,
                            listType: e.listType,
                            type: e.type === "add" ? "remove" : "add",
                          };
                        }),
                        t = [o("WAWebStateUtils").unproxy(n)];
                      o("WAWebEditLabelAssociationBridge")
                        .editLabelAssociation(e, t)
                        .then(function () {
                          o(
                            "WAWebLabelCollection",
                          ).LabelCollection.addOrRemoveLabelsMD(e, t);
                        });
                    },
                  },
                });
              }
            }
          };
        },
        [b],
      );
      var x = m(function () {
        R(h());
      }, []);
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "add remove change reorder",
        x,
      );
      var $ = m(
          function (e, t) {
            var r = E.has(e),
              a = !r;
            k(function (t) {
              var n = new Set(t);
              return (a ? n.add(e) : n.delete(e), n);
            });
            var l = {
                id: e,
                listType: t != null ? t : void 0,
                type: a ? "add" : "remove",
              },
              s = [o("WAWebStateUtils").unproxy(n)];
            (I.current.push(l),
              o("WAWebListsLogging").logListUpdate({
                listId: Number(e),
                listAction: o("WAWebWamEnumListAction").LIST_ACTION
                  .UPDATE_MEMBERS,
                entryPoint:
                  i != null
                    ? i
                    : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                        .CHAT_LONG_PRESS_OPTIONS,
                addedChats: a ? [n] : [],
                removedChats: a ? [] : [n],
              }),
              o("WAWebEditLabelAssociationBridge")
                .editLabelAssociation([l], s)
                .then(function () {
                  o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(
                    [l],
                    s,
                  );
                }));
          },
          [n, i, E],
        ),
        P = m(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
                onBack: o("WAWebDrawerManager").closeDrawerLeft,
                onClose: o("WAWebDrawerManager").closeDrawerLeft,
                entryPoint:
                  i != null
                    ? i
                    : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                        .CHAT_LONG_PRESS_OPTIONS,
              }),
            );
          },
          [i],
        ),
        N = m(
          function () {
            if (o("WAWebMobilePlatforms").isSMB()) {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }),
              );
              return;
            }
            if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
              o("WAWebListsUtil").showMaxListsModal(y);
              return;
            }
            u
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable,
                    {
                      onContinue: function () {
                        (d(), P());
                      },
                    },
                  ),
                )
              : P();
          },
          [y, P, u, d],
        ),
        M = o("WAWebMobilePlatforms").isSMB(),
        w = S.map(function (t) {
          var n = E.has(t.id),
            a =
              M && t.colorIndex != null
                ? o("WAWebListUtils").colorIndexToHex(t.colorIndex)
                : null,
            i = c.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: a != null ? r("WDSIconIcLabelFilled.react") : void 0,
                iconXstyle: a != null ? g.inheritColor : void 0,
                title: t.name,
                onPress: function () {
                  return $(t.id, t.type);
                },
                isToggleable: !0,
                toggled: n,
                closeMenuOnPress: !1,
                testid: void 0,
                truncateText: !0,
              },
              a != null ? void 0 : t.id,
            );
          return a != null
            ? c.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.contentsWrapper,
                    g.labelIconColor(a),
                  ),
                  { children: i },
                ),
                t.id,
              )
            : i;
        });
      (S.length > 0 &&
        w.push(
          c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator"),
        ),
        w.push(
          c.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcAdd.react"),
              title: o("WAWebMobilePlatforms").isSMB()
                ? s._(/*BTDS*/ "New label")
                : s._(/*BTDS*/ "New list"),
              onPress: N,
              testid: void 0,
              truncateText: !0,
            },
            "create-new-list-submenu-item",
          ),
        ));
      var A = Math.round(window.innerHeight * 0.96);
      return c.jsxs(r("WDSMenu.react"), {
        maxHeight: A,
        children: [w, c.jsx("div", { className: "xqu0tyb" }, "bottom-spacer")],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
