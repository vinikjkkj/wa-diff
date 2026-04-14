__d(
  "WAWebBizChatAssignmentModal.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebBizChatAssignmentAction",
    "WAWebButton.react",
    "WAWebChatAssignmentCollection",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebQplFlowWrapper",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "qpl",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        helperText: {
          marginInlineStart: "x150mmf0",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        label: {
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          height: "xmix8c7",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x1c1uobl",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("WAWebUserPrefsMeUser")
        .getMeDevicePnOrThrow_DO_NOT_USE()
        .getDeviceId();
      return e.deviceId === t
        ? 0
        : e.deviceId === o("WAWebAgentModelUtils").PRIMARY_DEVICE_ID
          ? 1
          : 2;
    }
    function g(e, t) {
      return f(e) - f(t);
    }
    function h() {
      var e = o("WAWebAgentCollection").AgentCollection.filter(function (e) {
        return !e.isDeleted;
      });
      return (e.sort(g), e);
    }
    function y(e) {
      var t = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId(),
        n;
      return (
        e.deviceId === t ? (n = s._(/*BTDS*/ "You")) : (n = null),
        c.jsx(o("WAWebText_DONOTUSE.react").Text, {
          as: "span",
          color: "secondary",
          xstyle: _.helperText,
          children: n,
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return c.jsx(r("WAWebFlexItem.react"), { grow: 1 });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = r("qpl")._(701185297, "3420"),
      v = r("qpl")._(701183376, "3423");
    function S(t) {
      var a = t.chats,
        i = t.entryPoint,
        l = t.onSave,
        u = function () {
          return new Map(
            a.map(function (e) {
              var t = o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.getAgentCollectionForChatId(e.id);
              return [
                e.id.toString(),
                t.length > 0 ? r("WANullthrows")(t.head()).id : null,
              ];
            }),
          );
        },
        d = p(u),
        f = d[0],
        g = d[1];
      o("useWAWebListener").useListener(
        o("WAWebChatAssignmentCollection").ChatAssignmentCollection,
        "add change remove",
        function () {
          g(u());
        },
      );
      var S = function () {
          var e = f.get(a[0].id.toString()),
            t = !0;
          return (
            f.forEach(function (n) {
              (n !== e && (e = null), n != null && (t = !1));
            }),
            { areAllChatsUnassigned: t, commonlyAssignedAgentId: e }
          );
        },
        R = p(S().commonlyAssignedAgentId),
        L = R[0],
        E = R[1],
        k = p(h()),
        I = k[0],
        T = k[1];
      o("useWAWebListener").useListener(
        o("WAWebAgentCollection").AgentCollection,
        "add change remove",
        function () {
          T(h());
        },
      );
      var D = function () {
          E(null);
        },
        x = c.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "all",
          align: "center",
          children: [
            c.jsx(o("WAWebText.react").WAWebTextLarge, {
              as: "span",
              weight: "medium",
              children: s._(/*BTDS*/ "Assign chat"),
            }),
            c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
              nowrap: !0,
              disabled: !L,
              onClick: D,
              children: s._(/*BTDS*/ "Unassign"),
            }),
          ],
        }),
        $ = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              (o("WAWebQplFlowWrapper").QPL.markerStart(b, {
                annotations: { int: { chats_count: a.length } },
              }),
                yield o("WAWebBizChatAssignmentAction").changeChatAssignment(
                  a.map(function (e) {
                    return { agentId: L, chat: e };
                  }),
                  i,
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(b, 2),
                l == null || l());
            } catch (t) {
              (o("WAWebQplFlowWrapper").QPL.markerEnd(b, 3),
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "chat_assignment_modal: handleOk error ",
                      "",
                    ])),
                  t,
                ));
            } finally {
              o("WAWebModalManager").ModalManager.close();
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        P = function (t) {
          E(t.target.value);
        },
        N = I.map(function (e) {
          return c.jsx(
            "li",
            {
              children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [
                  c.jsx("input", {
                    id: e.id,
                    className: "x2lah0s xmix8c7 xqf2s3x x1xp8n7a",
                    type: "radio",
                    name: "agent",
                    checked: e.id === L,
                    value: e.id,
                    onChange: P,
                  }),
                  c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                    htmlFor: e.id,
                    size: "16",
                    color: "secondary",
                    xstyle: _.label,
                    children: e.name,
                  }),
                  c.jsx(C, {}),
                  y(e),
                ],
              }),
            },
            e.id,
          );
        }),
        M = function () {
          var e = S(),
            t = e.areAllChatsUnassigned,
            n = e.commonlyAssignedAgentId;
          return a.length > 1 && L == null ? t : L === n;
        };
      return (
        m(function () {
          o("WAWebQplFlowWrapper").QPL.markerEnd(v, 2);
        }, []),
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "chat-assignment" },
          title: x,
          okText: s._(/*BTDS*/ "Save"),
          type: o("WAWebModal.react").ModalTheme.ChatAssignment,
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: $,
          okDisabled: M(),
          children: c.jsx("form", { children: c.jsx("ol", { children: N }) }),
        })
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
