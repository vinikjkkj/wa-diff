__d(
  "AdsMessengerConstants",
  ["fbt", "AdCampaignDestination"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "https://fb.com/messenger_doc/",
      u = "json_blob",
      c = "https://fb.com/messenger_doc/",
      d = "welcome_message",
      m = 300,
      p = 250,
      _ = 80,
      f = 60,
      g = 80,
      h = 20,
      y = 80,
      C = 300,
      b = 80,
      v = 50,
      S = 300,
      R = 80,
      L = 80,
      E = 80,
      k = 300,
      I = 80,
      T = 50,
      D = 280,
      x = "promote_image_upload_experiment",
      $ = 5,
      P = 3,
      N = "UNDEFINED",
      M = "{{user_first_name}}",
      w = "{{page_name}}",
      A = s._(
        /*BTDS*/ "Hi {firstname}! Please let us know how we can help you.",
        [s._param("firstname", M)],
      ),
      F = s._(
        /*BTDS*/ "Hi {firstname}! Please let us know how we can help you.",
        [s._param("firstname", M)],
      ),
      O = s._(/*BTDS*/ "Hi! Please let us know how we can help you."),
      B = s._(/*BTDS*/ "Hi!"),
      W = s._(/*BTDS*/ "Hi {firstname}!", [s._param("firstname", M)]),
      q = s._(
        /*BTDS*/ "Hi {firstname}, we heard you\u2019d like to get offers and updates from {pagename}.",
        [s._param("firstname", M), s._param("pagename", w)],
      ),
      U = s._(
        /*BTDS*/ "Hi {firstname}! We wanted to follow up. Do you have any questions?",
        [s._param("firstname", M)],
      ),
      V = s._(/*BTDS*/ "Hi {firstname}! Take a look at all our products", [
        s._param("firstname", M),
      ]),
      H = s._(
        /*BTDS*/ "Hi {firstname}! Let us know if you have questions about our products.",
        [s._param("firstname", M)],
      ),
      G = s._(
        /*BTDS*/ "Type a welcome message, like \u201cHi, we heard you\u2019d like to get offers and updates.\u201d",
      ),
      z = s._(/*BTDS*/ "Chat in Messenger"),
      j = s._(/*BTDS*/ "Get updates on Messenger"),
      K = s._(/*BTDS*/ "Play in Messenger"),
      Q = [
        s._(/*BTDS*/ "Can I learn more about your business?"),
        s._(/*BTDS*/ "Can you tell me more about your ad?"),
        s._(/*BTDS*/ "Is anyone available to chat?"),
      ],
      X = s._(/*BTDS*/ "Welcome message"),
      Y = s._(/*BTDS*/ "Call to action"),
      J = s._(/*BTDS*/ "Please enter a valid greeting."),
      Z = s._(/*BTDS*/ "Please enter a valid question."),
      ee = "988798384511286",
      te = s._(/*BTDS*/ "Duplicate"),
      ne = s._(/*BTDS*/ "Create"),
      re = s._(/*BTDS*/ "See more"),
      oe = s._(/*BTDS*/ "See less"),
      ae = s._(/*BTDS*/ "Greeting"),
      ie = s._(/*BTDS*/ "Questions and responses"),
      le = s._(/*BTDS*/ "Frequently asked questions"),
      se = s._(/*BTDS*/ "Pre-filled message"),
      ue = s._(/*BTDS*/ "Buttons"),
      ce = s._(/*BTDS*/ "Quick replies"),
      de = s._(/*BTDS*/ "Create chat"),
      me = s._(/*BTDS*/ "Edit"),
      pe = s._(/*BTDS*/ "Preview in Messenger"),
      _e = s._(/*BTDS*/ "Preview in Instagram"),
      fe = s._(/*BTDS*/ "Select template"),
      ge = s._(/*BTDS*/ "Messenger only"),
      he = s._(/*BTDS*/ "Text"),
      ye = s._(/*BTDS*/ "Create new"),
      Ce = s._(/*BTDS*/ "New or Existing"),
      be = s._(/*BTDS*/ "Use existing"),
      ve = s._(/*BTDS*/ "Hello! Can I get more info on this?"),
      Se = s._(/*BTDS*/ "You can give us a call for more information."),
      Re = s._(/*BTDS*/ "Call now to get faster service."),
      Le = s._(
        /*BTDS*/ "Now it\u2019s easier to add an image to your greeting to help increase interaction with your message.",
      );
    function Ee(e) {
      return e === r("AdCampaignDestination").WHATSAPP
        ? s._(/*BTDS*/ "Select sequence")
        : s._(/*BTDS*/ "Select flow");
    }
    function ke(e) {
      return e === r("AdCampaignDestination").WHATSAPP
        ? s._(/*BTDS*/ "Message sequence")
        : s._(/*BTDS*/ "Message flow");
    }
    var Ie = s._(/*BTDS*/ "Partner app"),
      Te = s._(/*BTDS*/ "Select app");
    function De(e) {
      return e === r("AdCampaignDestination").WHATSAPP
        ? s._(/*BTDS*/ "Select message sequence")
        : s._(/*BTDS*/ "Select message flow");
    }
    var xe = s._(
      /*BTDS*/ "Customize your own template with JSON code in our code editor.",
    );
    function $e(e) {
      return e === r("AdCampaignDestination").WHATSAPP
        ? s._(
            /*BTDS*/ "Use an existing message sequence from a partner messaging app.",
          )
        : s._(
            /*BTDS*/ "Use an existing message flow from a partner messaging app. You can select the flow or enter JSON code.",
          );
    }
    var Pe = s._(/*BTDS*/ "Preview in"),
      Ne = s._(/*BTDS*/ "Messenger"),
      Me = s._(/*BTDS*/ "Instagram");
    function we(e) {
      return e === r("AdCampaignDestination").WHATSAPP
        ? s._(/*BTDS*/ "Select Message sequence")
        : s._(/*BTDS*/ "Select Message flow");
    }
    var Ae = s._(/*BTDS*/ "Enter JSON Code"),
      Fe = s._(/*BTDS*/ "[Image included]"),
      Oe = s._(/*BTDS*/ "[Video included]"),
      Be = s._(/*BTDS*/ "Add responses"),
      We = s._(/*BTDS*/ "Business chat"),
      qe = s._(/*BTDS*/ "Your Messenger link"),
      Ue = s._(/*BTDS*/ "Welcome! Please fill out the form below to sign up!"),
      Ve = s._(
        /*BTDS*/ "Thanks for your interest! Share more info with us to get started.",
      ),
      He = s._(/*BTDS*/ "Frequently asked questions are from Business Suite.");
    ((l.EMPTY_MESSENGER_LINK = e),
      (l.JSON_BLOB = u),
      (l.MESSENGER_PREFIX = c),
      (l.WELCOME_MESSAGE = d),
      (l.WELCOME_MESSAGE_MAX_LENGTH = m),
      (l.MARKETING_MESSAGE_MAX_LENGTH = p),
      (l.TITLE_MAX_LENGTH = _),
      (l.TRUNCATION_MAX_LENGTH = f),
      (l.SUBTITLE_MAX_LENGTH = g),
      (l.BUTTON_LABEL_MAX_LENGTH = h),
      (l.QUICK_REPLY_TITLE_MAX_LENGTH = y),
      (l.QUICK_REPLY_TEXT_RESPONSE_MAX_LENGTH = C),
      (l.ICE_BREAKER_MAX_LENGTH = b),
      (l.ICE_BREAKER_RESPONSE_MAX_HEIGHT = v),
      (l.ICE_BREAKER_RESPONSE_MAX_LENGTH = S),
      (l.OPTION_MAX_LENGTH = R),
      (l.MAX_TEMPLATE_LENGTH = L),
      (l.AUTOFILL_MESSAGE_MAX_LENGTH = E),
      (l.IN_THREAD_MULTIPHOTO_CAROUSEL_REPLY_MAX_LENGTH = k),
      (l.CALL_PROMPT_MESSAGE_MAX_LENGTH = I),
      (l.CTWA_NUDGE_MAX_HEIGHT = T),
      (l.CTWA_NUDGE_MAX_LENGTH = D),
      (l.PROMOTE_IMAGE_EXP_VARIANT = x),
      (l.DEFAULT_MAX_FAQ_NUM = $),
      (l.MAX_FAQ_NUM_FOR_WTM = P),
      (l.AI_GEN_NUDGE_MODEL_VERSION_UNDEFINED = N),
      (l.DEFAULT_PERSONALIZED_GREETING_TEXT = A),
      (l.DEFAULT_PERSONALIZED_GREETING_TEXT_NEW_DESIGN = F),
      (l.DEFAULT_GREETING_TEXT_NEW_DESIGN = O),
      (l.DEFAULT_GREETING_TEXT_PREFIX = B),
      (l.DEFAULT_GREETING_TEXT_PREFIX_PERSONALIZED = W),
      (l.DEFAULT_MARKETING_MESSAGES_WELCOME_MESSAGE = q),
      (l.DEFAULT_INITIAL_NUDGE_MESSAGE = U),
      (l.DEFAULT_INITIAL_REENGAGEMENT_MESSAGE = V),
      (l.DEFAULT_PERSONALIZED_RECONSIDERATION_TEXT = H),
      (l.DEFAULT_MARKETING_MESSAGES_WELCOME_MESSAGE_PLACE_HOLDER = G),
      (l.DEFAULT_HEADLINE = z),
      (l.DEFAULT_CTS_HEADLINE = j),
      (l.DEFAULT_GAMES_HEADLINE = K),
      (l.DEFAULT_ICEBREAKERS = Q),
      (l.WELCOME_MESSAGE_PREVIEW_TITLE = X),
      (l.CALL_TO_ACTION_PREVIEW_TITLE = Y),
      (l.EMPTY_GREETING_ERROR_MESSAGE = J),
      (l.EMPTY_ICEBREAKER_ERROR_MESSAGE = Z),
      (l.PAGE_ID = ee),
      (l.DUPLICATE = te),
      (l.CREATE = ne),
      (l.SEE_MORE = re),
      (l.SEE_LESS = oe),
      (l.GREETING = ae),
      (l.QUESTIONS_AND_RESPONSES = ie),
      (l.FREQUENTLY_ASKED_QUESTIONS = le),
      (l.PREFILL_MESSAGE = se),
      (l.BUTTONS = ue),
      (l.QUICK_REPLIES = ce),
      (l.CREATE_CHAT = de),
      (l.EDIT = me),
      (l.PREVIEW = pe),
      (l.PREVIEW_IG = _e),
      (l.SELECT_TEMPLATE = fe),
      (l.MESSENGER_ONLY = ge),
      (l.TEXT = he),
      (l.CREATE_NEW_LABEL = ye),
      (l.NEW_OR_EXISTING_LABEL = Ce),
      (l.USE_EXISTING_LABEL = be),
      (l.DEFAULT_AUTOFILL_MESSAGE = ve),
      (l.DEFAULT_CALL_PROMPT_MESSAGE = Se),
      (l.DEFAULT_START_CONVERSATIONS_CALL_PROMPT_MESSAGE = Re),
      (l.PROMOTE_IMAGE_IN_WELCOME_MESSAGE_GUIDANCE = Le),
      (l.getSelectFlowLabelByDestination = Ee),
      (l.getMessageFlowLabelByDestination = ke),
      (l.PARTNER_APP = Ie),
      (l.PARTNER_APP_PLACEHOLDER_LABEL = Te),
      (l.getMessageFlowPlaceholderByDestination = De),
      (l.ADVANCED_SETUP_RADIO_BUTTON_DESC = xe),
      (l.getPartnerAppRadioButtonDescByDestination = $e),
      (l.PREVIEW_IN = Pe),
      (l.MESSENGER = Ne),
      (l.INSTAGRAM = Me),
      (l.getSelectMessageFlowLabelByDestination = we),
      (l.ENTER_JSON_CODE_LABEL = Ae),
      (l.IMAGE_INCLUDED_PLACEHOLDER = Fe),
      (l.VIDEO_INCLUDED_PLACEHOLDER = Oe),
      (l.ADD_RESPONSES = Be),
      (l.MESSENGER_PREVIEW_BUSINESS_CHAT = We),
      (l.ADS_EXTRA_MENTION_DROP_DOWN_MENU_MME_LINK_SUBTITLE = qe),
      (l.FLOWS_DEFAULT_MESSAGE = Ue),
      (l.FLOWS_GET_STARTED_DEFAULT_MESSAGE = Ve),
      (l.INBOX_FAQS_TOOLTIP_L1_PREVIEW = He));
  },
  226,
);
