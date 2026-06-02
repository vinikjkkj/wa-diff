__d(
  "WAWebBizInteractiveMessageQuickReplyAction",
  ["WANullthrows", "WAWebCarouselMsgUtils", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (e.isCarouselCard) return s(e, t);
      var n = u(e, t),
        r = o("WAWebSchemaMessage").getMessageTable(),
        a = await r.get(e.id.toString());
      (await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkCreateOrMerge([
          { id: a == null ? void 0 : a.id, interactivePayload: n },
        ]),
        e.set("interactivePayload", n));
    }
    async function s(e, t) {
      var n = u(e.interactivePayload, t),
        a = r("WANullthrows")(
          o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e),
        ),
        i = r("WANullthrows")(a.carouselCardsParsed).slice(),
        l = i.findIndex(function (t) {
          return t.id.toString() === e.id.toString();
        });
      i[l] = babelHelpers.extends({}, i[l], { interactivePayload: n });
      var s = o("WAWebSchemaMessage").getMessageTable(),
        c = await s.get(a.id.toString());
      (await s.bulkCreateOrMerge([
        { id: c == null ? void 0 : c.id, carouselCardsParsed: i },
      ]),
        a.set("carouselCardsParsed", i),
        e.set("interactivePayload", n));
    }
    function u(e, t) {
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
      (l.rebuildInteractivePayloadWithDisabledButton = u));
  },
  98,
);
