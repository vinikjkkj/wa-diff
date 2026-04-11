__d(
  "WAWebGetBugReportingCategories",
  ["WAWebBugReportCategoryTypes"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebBugReportCategoryTypes").ALL_CATEGORIES.map(function (e) {
        return babelHelpers.extends({ id: e }, s(e));
      });
    }
    function s(e) {
      switch (e) {
        case "ai_tab":
          return {
            title: "AIs Tab",
            subtitle:
              "AIs tab, accessing characters directly, is replacing Communities tab",
          };
        case "business":
          return {
            title: "Business",
            subtitle:
              "Shopping, Business Organic Search, SMB Marketing Messages, Meta Verified, Business App Tools, 3P Extensions Beta, Payments, Biz AI (AI Agents, AI for Business, CtWA, Catalog, SMB Core",
          };
        case "business_search":
          return {
            title: "Business Search",
            subtitle: "WhatsApp Business Search",
          };
        case "calling":
          return {
            title: "Calling (VoIP)",
            subtitle:
              "Call Quality, Audio/Video Calling, Desktop Calling, Screen sharing, Call links, Group Calls, Group Contacts Online Count, Typing Indicator",
          };
        case "channels":
          return {
            title: "Channels",
            subtitle:
              "WhatsApp Channels, Updates tab, Recommendation unit, Explore More, etc",
          };
        case "cross_app_integrations":
          return {
            title: "Account Linking",
            subtitle:
              "WAFFLE, Cross-app Integrations and FoA cross sharing, Accounts Center, FoA Profile Links",
          };
        case "data_management":
          return {
            title: "Data Management",
            subtitle:
              "Backup/Restore, Cross Platform Migrations, Chat Transfer, Storage Management Screens",
          };
        case "growth_broadcast":
          return {
            title: "Acquisition (US Growth)",
            subtitle:
              "Invites, Preloads, Inorganic Notifications, Contact QR Codes, Contact List, Add/Edit Contacts, Contact suggestions, Chat list suggestions, Family of Apps Settings, In-app Comms (PushPSA, StatusPSA, ChatPSA)",
          };
        case "infra":
          return {
            title: "Infra",
            subtitle: "Infrastructure, Internal Systems",
          };
        case "integrity":
          return { title: "Integrity", subtitle: "Account Defense" };
        case "messaging":
          return { title: "1:1 Messaging", subtitle: "1:1 Chats" };
        case "new_devices":
          return {
            title: "Companion Devices",
            subtitle: "Mac Catalyst, iPad, Windows, Web, Wear OS",
          };
        case "other":
          return {
            title: "Other/I'm not sure",
            subtitle: "Features/bugs you're not sure about",
          };
        case "privacy":
          return {
            title: "Privacy & Usernames",
            subtitle:
              "Privacy Issues/Settings, Account & Identity, Ephemerality, In-app comms, Phone number hiding, Online Presence",
          };
        case "rich_messaging":
          return {
            title: "Experience",
            subtitle:
              "Video Notes (PTV), Document Previews, Reactions, Messaging Deeplinks, PTT/Audio Messages, Message Editing Polls, Contacts, Attachments Men, Chat/Group Info, Emojis, Read Receipts, Starred Messages",
          };
        case "sharing":
          return {
            title: "Media (Sharing)",
            subtitle:
              "Media Picker, Camera, Photos, Videos, Files, PDFs, Docs, Stickers/Sticker Tray, Link Previews, Share Extension",
          };
        case "ui_redesign":
          return {
            title: "UI Foundations & Brand (WDS)",
            subtitle: "WhatsApp UI Redesign",
          };
        case "whatsapp_ai":
          return {
            title: "WhatsApp AI",
            subtitle:
              "AI related features like: AI Voice, Imagine, Search, Summarization etc",
          };
        case "whatsapp_vr":
          return {
            title: "WhatsApp VR",
            subtitle: "WhatsApp on Quest Devices",
          };
        case "platforms_delivery":
          return {
            title: "Platforms & Delivery",
            subtitle:
              "Any performance issue - crashing app, slow app, slow scrolling, battery life",
          };
        case "support_experience":
          return {
            title: "Support Experience (SXP)",
            subtitle:
              "WhatsApp support channel, SAGA, Support Chat Bot, Help Center, Bug Reporting",
          };
        case "dogfooder_diagnostics":
          return { title: "Dogfooder Diagnostics", subtitle: "" };
        case "fishfooding":
          return {
            title: "Fishfooding Bug",
            subtitle:
              "Bug for a feature still in development and not available for Dogfooding",
          };
        case "qa":
          return {
            title: "QA",
            subtitle: "Only QA team to select this option",
          };
        case "wamo":
          return {
            title: "Ads",
            subtitle: "Promo channel, status, preferences, PP/TOS, linked UX",
          };
        case "account_access":
          return {
            title:
              "Platform (SMS& Reg Infra, Account Access, Account creation & Management)",
            subtitle:
              "Registration/OTP Delivery, Change Number (Client & server), Passkeys, E-Mail Verification, AutoConf, Google OAuth, 2FA - 2 Factor Auth, Flash Calls, Mobile Originated, Silent Authentication, Token Registration, Device Switching,Multi-Account, User Onboarding Journey,Message Translation, Audio guidance during onboarding,Account Transfer (up until the device pairing phase), Profile Setup, Permissions prompts and upsell screens",
          };
        case "ai_psi":
          return {
            title: "MetaAI PSI",
            subtitle: "Personal Search Index (PSI) Bugs",
          };
        case "avatars":
          return {
            title: "Avatars",
            subtitle:
              "Avatar Creation, Avatar Menu, Avatar Quick Reply in Status, Avatar Stickers",
          };
        case "group_messaging":
          return {
            title: "Group Messaging",
            subtitle:
              "Communities, Stickers Messages, Forward message, Chat Info, Group Info, Pinned Messages, Group join request. Group Admin Controls",
          };
        case "status":
          return {
            title: "Status",
            subtitle:
              "WhatsApp Status features (NOT related to profile status), status privacy options, posting status, status reactions, status tools, status privacy options",
          };
        case "localization":
          return {
            title: "Localization",
            subtitle:
              "Report translation/localization issues/feedback. Please provide the bug category (i.e. Channels, Media, Ads, etc.) for our reference and the English (original or back translation), if you are able to.",
          };
        case "subscriptions":
          return {
            title: "Subscriptions",
            subtitle:
              "Any WhatsApp feature that falls into a Meta Subscriptions bundle, e.g. app themes, app icons, ringtones, exclusive stickers, enhanced lists, additional pinned chats, etc.",
          };
      }
    }
    l.getBugReportingCategories = e;
  },
  98,
);
