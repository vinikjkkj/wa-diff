__d(
  "WAWebChatParticipantList.react",
  [
    "fbt",
    "WAWebChatContact.react",
    "WAWebContactComparator",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebOutContactModel",
    "WAWebOutContactPillItem.react",
    "WAWebSingleSelection",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useMemo,
      f = o("WAWebChatContact.react").ContactFactory();
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contacts,
        l = a.onDelete,
        u = a.onDeleteOutContact,
        d = a.onFocusSearch,
        g = a.outContacts,
        h = _(
          function () {
            return []
              .concat(i, g != null ? g : [])
              .sort(o("WAWebContactComparator").ContactComparator);
          },
          [i, g],
        ),
        y = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))(h, function (e) {
            return e.id.toString();
          });
        }),
        C = function () {
          h.length > 0 && y.current.setLast(!0);
        },
        b = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = y.current.prev();
          e > -1 && y.current.setPrev(!0);
        },
        v = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = y.current.next();
          y.current.index === e
            ? (y.current.unset(), d == null || d(t))
            : y.current.setNext(!0);
        },
        S = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = y.current.getVal();
          if (e instanceof r("WAWebOutContactModel")) {
            u == null || u(e);
            return;
          }
          if (e) {
            var n = i.find(function (t) {
              return t === e;
            });
            n && l && l(t, n);
          }
        },
        R = function (t, n) {
          y.current.setVal(n);
        };
      if (
        (m(
          function () {
            y.current.init(Array.from(h), !0);
          },
          [h, y],
        ),
        p(n, function () {
          return { focusLast: C };
        }),
        !i && !g)
      )
        return null;
      var L = h.length
          ? h.map(function (e) {
              return e instanceof r("WAWebOutContactModel")
                ? c.jsx(
                    r("WAWebOutContactPillItem.react"),
                    {
                      outContact: e,
                      onDelete: function (t) {
                        return u == null ? void 0 : u(t);
                      },
                    },
                    e.id.toString(),
                  )
                : c.jsx(
                    f,
                    {
                      contact: e,
                      active: y.current,
                      onDelete: a.onDelete,
                      onClick: R,
                      type: o("WAWebChatContact.react").ContactCellType.SMALL,
                      theme: a.theme,
                      waitIdle: !0,
                      isGroupCreationFlow: !0,
                    },
                    e.id.toString(),
                  );
            })
          : null,
        E = { up: b, down: v };
      (a.onDelete || a.onDeleteOutContact) &&
        ((E[r("WAWebL10N").LR("left", "right")] = b),
        (E[r("WAWebL10N").LR("right", "left")] = v),
        (E.backspace = S));
      var k = c.jsx("ul", {
        "aria-live": "polite",
        "aria-atomic": "true",
        "aria-label": s._(/*BTDS*/ "Selected contacts"),
        children: L,
      });
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: E,
        children: k,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
