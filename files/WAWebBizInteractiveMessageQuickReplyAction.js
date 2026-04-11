__d(
  "WAWebBizInteractiveMessageQuickReplyAction",
  [
    "WANullthrows",
    "WAWebCarouselMsgUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.isCarouselCard) return u(e, t);
          var n = d(e, t),
            r = o("WAWebSchemaMessage").getMessageTable(),
            a = yield r.get(e.id.toString());
          (yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkCreateOrMerge([
              { id: a == null ? void 0 : a.id, interactivePayload: n },
            ]),
            e.set("interactivePayload", n));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e.interactivePayload, t),
            a = r("WANullthrows")(
              o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e),
            ),
            i = r("WANullthrows")(a.carouselCardsParsed).slice(),
            l = i.findIndex(function (t) {
              return t.id.toString() === e.id.toString();
            });
          i[l] = babelHelpers.extends({}, i[l], { interactivePayload: n });
          var s = o("WAWebSchemaMessage").getMessageTable(),
            u = yield s.get(a.id.toString());
          (yield s.bulkCreateOrMerge([
            { id: u == null ? void 0 : u.id, carouselCardsParsed: i },
          ]),
            a.set("carouselCardsParsed", i),
            e.set("interactivePayload", n));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        buttons:
          e == null || (n = e.buttons) == null
            ? void 0
            : n.map(function (e, n) {
                if (e.buttonParamsJson === void 0) return e;
                var r = JSON.parse(e.buttonParamsJson);
                return (
                  t === n && (r.disabled = !0),
                  { name: e.name, buttonParamsJson: JSON.stringify(r) }
                );
              }),
      });
    }
    ((l.markInteractiveButtonClicked = e),
      (l.rebuildInteractivePayloadWithDisabledButton = d));
  },
  98,
);
