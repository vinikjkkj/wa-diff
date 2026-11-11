__d(
  "WAWebMessageBubbleShowroomMsgCreators",
  ["WAWebMediaTypes", "WAWebMsgCollection", "WAWebMsgKey", "WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    var e = 0;
    function s() {
      return ++e;
    }
    var u =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQIW2P4z8DwHwMDAwMAFAAD/YWvLgAAAABJRU5ErkJggg==",
      c = Object.freeze({
        textOut:
          "Hey! How are you doing today? " + String.fromCodePoint(128522),
        textIn: "I'm doing great, thanks for asking! What about you?",
        linkText: "Check out this article: https://www.whatsapp.com",
        docFilename: "quarterly-report.pdf",
        vcardBody:
          "BEGIN:VCARD\nVERSION:3.0\nFN:John Smith\nTEL:+1234567890\nEND:VCARD",
        pollName: "What should we have for lunch?",
        fwdText:
          "Fun fact: Honey never expires. Archaeologists found 3000-year-old honey in Egyptian tombs!",
        captionText:
          "Beautiful sunset at the beach! " + String.fromCodePoint(127749),
        replyQuote: "Are we still meeting tomorrow?",
        replyResponse:
          "Yes, same time and place! " + String.fromCodePoint(128077),
      });
    function d(e, t) {
      return (o("WAWebMsgCollection").MsgCollection.add(e), t.push(e), e);
    }
    function m(e, t, n) {
      return new (r("WAWebMsgKey"))({
        fromMe: e,
        remote: t,
        id: "showroom-" + n + "-" + (e ? "out" : "in") + "-" + s(),
      });
    }
    function p(e, t, n) {
      e.mediaData != null &&
        e.mediaData.set({
          renderableUrl: u,
          fullWidth: t,
          fullHeight: n,
          mediaStage: o("WAWebMediaTypes").MediaDataStage.RESOLVED,
        });
    }
    function _(e) {
      var t = e.allMsgs,
        n = e.author,
        r = e.fromMe,
        a = e.meUser,
        i = e.otherUser,
        l = e.typeId,
        s = r ? a : i,
        u = r ? i : a,
        _ = Math.floor(Date.now() / 1e3),
        f = 3,
        g = n != null ? { author: n } : {};
      e: {
        if (l === "text")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "chat"),
                  type: "chat",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { body: r ? c.textOut : c.textIn },
              ),
            ),
            t,
          );
        if (l === "link-preview")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "url"),
                  type: "chat",
                  subtype: "url",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                {
                  body: c.linkText,
                  matchedText: "https://www.whatsapp.com",
                  canonicalUrl: "https://www.whatsapp.com",
                  title: "WhatsApp Messenger",
                  description: "Simple, reliable messaging",
                  richPreviewType: 0,
                },
              ),
            ),
            t,
          );
        if (l === "photo") {
          var h = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "image"),
                  type: "image",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { caption: "" },
              ),
            ),
            t,
          );
          return (p(h, 300, 200), h);
          break e;
        }
        if (l === "video") {
          var y = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "video"),
                  type: "video",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
              ),
            ),
            t,
          );
          return (p(y, 320, 240), y);
          break e;
        }
        if (l === "audio")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "audio"),
                  type: "audio",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
              ),
            ),
            t,
          );
        if (l === "voice-note")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "ptt"),
                  type: "ptt",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
              ),
            ),
            t,
          );
        if (l === "document")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "document"),
                  type: "document",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { body: c.docFilename, filename: c.docFilename },
              ),
            ),
            t,
          );
        if (l === "sticker") {
          var C = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "sticker"),
                  type: "sticker",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
              ),
            ),
            t,
          );
          return (p(C, 160, 160), C);
          break e;
        }
        if (l === "location")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "location"),
                  type: "location",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { lat: 37.7749, lng: -122.4194 },
              ),
            ),
            t,
          );
        if (l === "contact")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "vcard"),
                  type: "vcard",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { body: c.vcardBody, subtype: "vcard" },
              ),
            ),
            t,
          );
        if (l === "poll")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "poll_creation"),
                  type: "poll_creation",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                {
                  pollName: c.pollName,
                  pollOptions: [
                    { name: "Pizza" },
                    { name: "Sushi" },
                    { name: "Tacos" },
                  ],
                },
              ),
            ),
            t,
          );
        if (l === "event")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "event_creation"),
                  type: "event_creation",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
              ),
            ),
            t,
          );
        if (l === "single-emoji")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "chat-emoji"),
                  type: "chat",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { body: "\uD83D\uDC4D" },
              ),
            ),
            t,
          );
        if (l === "emoji-reply") {
          var b = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(!r, i, "chat-emoji-quoted"),
                  type: "chat",
                  from: r ? i : a,
                  to: r ? a : i,
                  t: _,
                  ack: f,
                },
                g,
                { body: c.replyQuote },
              ),
            ),
            t,
          );
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "chat-emoji-reply"),
                  type: "chat",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                {
                  body: "\uD83D\uDD25",
                  quotedMsg: b,
                  quotedStanzaID: b.id.id,
                  quotedParticipant: b.from,
                },
              ),
            ),
            t,
          );
        }
        if (l === "reply") {
          var v = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(!r, i, "chat-quoted"),
                  type: "chat",
                  from: r ? i : a,
                  to: r ? a : i,
                  t: _,
                  ack: f,
                },
                g,
                { body: c.replyQuote },
              ),
            ),
            t,
          );
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "chat-reply"),
                  type: "chat",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                {
                  body: c.replyResponse,
                  quotedMsg: v,
                  quotedStanzaID: v.id.id,
                  quotedParticipant: v.from,
                },
              ),
            ),
            t,
          );
        }
        if (l === "forwarded")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "chat-fwd"),
                  type: "chat",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { body: c.fwdText, isForwarded: !0, forwardingScore: 1 },
              ),
            ),
            t,
          );
        if (l === "media-caption") {
          var S = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "image-caption"),
                  type: "image",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { caption: c.captionText },
              ),
            ),
            t,
          );
          return (p(S, 300, 200), S);
          break e;
        }
        if (l === "view-once")
          return d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "image-viewonce"),
                  type: "image",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                { isViewOnce: !0 },
              ),
            ),
            t,
          );
        if (l === "smb-product") {
          var R = d(
            new (o("WAWebMsgModel").Msg)(
              babelHelpers.extends(
                {
                  id: m(r, i, "product"),
                  type: "product",
                  from: s,
                  to: u,
                  t: _,
                  ack: f,
                },
                g,
                {
                  title: "Organic Cotton T-Shirt",
                  description: "Premium quality, available in multiple colors",
                  businessOwnerJid: i.toString(),
                  productId: "prod-12345",
                  currencyCode: "USD",
                  priceAmount1000: 29990,
                  productImageCount: 3,
                  retailerId: "retailer-001",
                },
              ),
            ),
            t,
          );
          return (p(R, 300, 300), R);
          break e;
        }
        return l === "smb-order"
          ? d(
              new (o("WAWebMsgModel").Msg)(
                babelHelpers.extends(
                  {
                    id: m(r, i, "order"),
                    type: "order",
                    from: s,
                    to: u,
                    t: _,
                    ack: f,
                  },
                  g,
                  {
                    body: "",
                    message: "Order for 3 items",
                    orderId: "order-67890",
                    itemCount: 3,
                    orderTitle: "Your Cart",
                    sellerJid: i.toString(),
                    token: "mock-token",
                    totalAmount1000: 59970,
                    totalCurrencyCode: "USD",
                  },
                ),
              ),
              t,
            )
          : l === "smb-list"
            ? d(
                new (o("WAWebMsgModel").Msg)(
                  babelHelpers.extends(
                    {
                      id: m(r, i, "list"),
                      type: "list",
                      from: s,
                      to: u,
                      t: _,
                      ack: f,
                    },
                    g,
                    {
                      body: "Please select an option from our menu",
                      title: "Our Menu",
                      footer: "Powered by Business",
                      list: {
                        listType: 0,
                        title: "Our Menu",
                        description: "Please select an option",
                        buttonText: "View Options",
                        sections: [
                          {
                            title: "Main Dishes",
                            rows: [
                              {
                                title: "Pizza Margherita",
                                description: "$12.99",
                                rowId: "1",
                              },
                              {
                                title: "Pasta Carbonara",
                                description: "$14.99",
                                rowId: "2",
                              },
                            ],
                          },
                        ],
                      },
                      buttonText: "View Options",
                    },
                  ),
                ),
                t,
              )
            : l === "smb-list-response"
              ? d(
                  new (o("WAWebMsgModel").Msg)(
                    babelHelpers.extends(
                      {
                        id: m(r, i, "list_response"),
                        type: "list_response",
                        from: s,
                        to: u,
                        t: _,
                        ack: f,
                      },
                      g,
                      { body: "Pizza Margherita" },
                    ),
                  ),
                  t,
                )
              : l === "smb-interactive"
                ? d(
                    new (o("WAWebMsgModel").Msg)(
                      babelHelpers.extends(
                        {
                          id: m(r, i, "interactive"),
                          type: "interactive",
                          from: s,
                          to: u,
                          t: _,
                          ack: f,
                        },
                        g,
                        {
                          body: "Check out our latest collection!",
                          title: "Summer Collection",
                          interactiveType: "shop",
                          interactiveHeader: {
                            title: "Summer Collection",
                            subtitle: "New arrivals",
                            hasMediaAttachment: !1,
                            mediaType: null,
                            thumbnail: null,
                          },
                        },
                      ),
                    ),
                    t,
                  )
                : l === "smb-native-flow-cta"
                  ? d(
                      new (o("WAWebMsgModel").Msg)(
                        babelHelpers.extends(
                          {
                            id: m(r, i, "native-flow-cta"),
                            type: "native_flow",
                            from: s,
                            to: u,
                            t: _,
                            ack: f,
                          },
                          g,
                          {
                            body: "Visit our website for more details",
                            title: "Shop Now",
                            nativeFlowName: "cta_url",
                            footer: "Tap the button below",
                            nativeFlowButtons: [
                              {
                                buttonText: { displayText: "Visit Website" },
                                nativeFlowInfo: {
                                  name: "cta_url",
                                  paramsJson: "{}",
                                },
                              },
                            ],
                          },
                        ),
                      ),
                      t,
                    )
                  : l === "smb-native-flow-order"
                    ? d(
                        new (o("WAWebMsgModel").Msg)(
                          babelHelpers.extends(
                            {
                              id: m(r, i, "native-flow-order"),
                              type: "native_flow",
                              from: s,
                              to: u,
                              t: _,
                              ack: f,
                            },
                            g,
                            {
                              body: "Your order has been confirmed!",
                              title: "Order #12345",
                              nativeFlowName: "order_details",
                              footer: "Tap to view details",
                              nativeFlowButtons: [
                                {
                                  buttonText: { displayText: "Review and pay" },
                                  nativeFlowInfo: {
                                    name: "review_and_pay",
                                    paramsJson: JSON.stringify({
                                      reference_id: "order-12345",
                                      type: "digital-goods",
                                      currency: "INR",
                                      total_amount: {
                                        value: 59900,
                                        offset: 100,
                                      },
                                      order: {
                                        items: [
                                          {
                                            retailer_id: "12345",
                                            name: "Premium Widget",
                                            amount: {
                                              value: 59900,
                                              offset: 100,
                                            },
                                            quantity: "1",
                                          },
                                        ],
                                      },
                                    }),
                                  },
                                },
                              ],
                            },
                          ),
                        ),
                        t,
                      )
                    : l === "smb-hsm"
                      ? d(
                          new (o("WAWebMsgModel").Msg)(
                            babelHelpers.extends(
                              {
                                id: m(r, i, "hsm"),
                                type: "hsm",
                                from: s,
                                to: u,
                                t: _,
                                ack: f,
                              },
                              g,
                              {
                                body: "Your appointment is confirmed for tomorrow at 3:00 PM. Please arrive 10 minutes early.",
                                title: "Appointment Confirmation",
                                footer: "Reply CANCEL to cancel",
                                hydratedButtons: [
                                  {
                                    urlButton: {
                                      displayText: "Visit Website",
                                      url: "https://example.com",
                                    },
                                  },
                                  {
                                    quickReplyButton: {
                                      displayText: "Confirm",
                                    },
                                  },
                                ],
                              },
                            ),
                          ),
                          t,
                        )
                      : l === "smb-template-reply"
                        ? d(
                            new (o("WAWebMsgModel").Msg)(
                              babelHelpers.extends(
                                {
                                  id: m(r, i, "template-reply"),
                                  type: "template_button_reply",
                                  from: s,
                                  to: u,
                                  t: _,
                                  ack: f,
                                },
                                g,
                                {
                                  body: "Yes, confirm my booking",
                                  title: "Confirm Booking",
                                  selectedId: "btn-confirm",
                                },
                              ),
                            ),
                            t,
                          )
                        : l === "smb-buttons-response"
                          ? d(
                              new (o("WAWebMsgModel").Msg)(
                                babelHelpers.extends(
                                  {
                                    id: m(r, i, "buttons-response"),
                                    type: "buttons_response",
                                    from: s,
                                    to: u,
                                    t: _,
                                    ack: f,
                                  },
                                  g,
                                  { body: "Option A: Express Delivery" },
                                ),
                              ),
                              t,
                            )
                          : l === "smb-payment"
                            ? d(
                                new (o("WAWebMsgModel").Msg)(
                                  babelHelpers.extends(
                                    {
                                      id: m(r, i, "payment"),
                                      type: "payment",
                                      subtype: "request",
                                      from: s,
                                      to: u,
                                      t: _,
                                      ack: f,
                                    },
                                    g,
                                    {
                                      paymentCurrency: "INR",
                                      paymentAmount1000: 5e5,
                                      paymentMessageReceiverJid: i,
                                    },
                                  ),
                                ),
                                t,
                              )
                            : l === "smb-greeting"
                              ? d(
                                  new (o("WAWebMsgModel").Msg)(
                                    babelHelpers.extends(
                                      {
                                        id: m(r, i, "greeting"),
                                        type: "automated_greeting_message",
                                        from: s,
                                        to: u,
                                        t: _,
                                        ack: f,
                                      },
                                      g,
                                      {
                                        body: "Welcome to our store! \uD83D\uDC4B How can we help you today? Browse our catalog or ask us anything.",
                                        ctwaContext: {
                                          sourceApp: "facebook",
                                          automatedGreetingMessageShown: !0,
                                          sourceUrl: "https://fb.com/ad/12345",
                                        },
                                      },
                                    ),
                                  ),
                                  t,
                                )
                              : null;
      }
    }
    l.createMsgForType = _;
  },
  98,
);
