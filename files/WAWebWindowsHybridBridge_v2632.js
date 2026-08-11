__d(
  "WAWebWindowsHybridBridge.v2632",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2632",
    "WAWebWindowsHybridBridgeAbProps.v2632",
    "WAWebWindowsHybridBridgeAdv.v2632",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2632",
    "WAWebWindowsHybridBridgeConnection.v2632",
    "WAWebWindowsHybridBridgeContacts.v2632",
    "WAWebWindowsHybridBridgeDebugFeatures.v2632",
    "WAWebWindowsHybridBridgeLinksPreview.v2632",
    "WAWebWindowsHybridBridgeMediaFiles.v2632",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2632",
    "WAWebWindowsHybridBridgeMetaConfig.v2632",
    "WAWebWindowsHybridBridgeNativeAppState.v2632",
    "WAWebWindowsHybridBridgeOds.v2632",
    "WAWebWindowsHybridBridgePictures.v2632",
    "WAWebWindowsHybridBridgePreferences.v2632",
    "WAWebWindowsHybridBridgeRateTheApp.v2632",
    "WAWebWindowsHybridBridgeRingtone.v2632",
    "WAWebWindowsHybridBridgeScalingControl.v2632",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2632",
    "WAWebWindowsHybridBridgeSharesheet.v2632",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2632",
    "WAWebWindowsHybridBridgeTouchpadFix.v2632",
    "WAWebWindowsHybridBridgeVoip.v2632",
    "WAWebWindowsHybridBridgeWam.v2632",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2632",
          ).WindowsHybridBridgeAbProps_v2632)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2632",
          ).WindowsHybridBridgeWam_v2632)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2632",
          ).WindowsHybridBridgePreferences_v2632)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2632",
          ).WindowsHybridBridgeScalingControl_v2632)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2632",
          ).WindowsHybridBridgeOds_v2632)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2632",
          ).WindowsHybridBridgePictures_v2632)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2632",
            ).WindowsHybridBridgeDebugFeatures_v2632)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2632",
          ).VoipWinRTBridge_v2632)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2632",
          ).WAWebWindowsHybridBridgeRateTheApp_v2632)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2632",
          ).WindowsHybridBridgeConnection_v2632)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2632",
          ).WindowsHybridBridgeTouchpadFix_v2632)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2632",
          ).WindowsHybridBridgeLinksPreview_v2632)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2632",
            ).WindowsHybridBridgeContacts_v2632)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2632",
            ).WindowsHybridBridgeContacts_v2632)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2632",
          ).WAWebWindowsHybridBridgeMediaFiles_v2632)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2632",
          ).WAWebWindowsHybridBridgeSharesheet_v2632)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2632",
          ).WindowsHybridAppActivationBridge_v2632)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2632",
          ).WindowsHybridBridgeNativeAppState_v2632)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2632",
          ).WindowsHybridBridgeSystemIntegrations_v2632)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2632",
          ).WindowsHybridBridgeBrowserExtensions_v2632)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2632",
          ).WindowsHybridBridgeSeamlessMigration_v2632)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2632",
          ).WindowsHybridBridgeMediaTranscoder_v2632)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2632",
          ).WindowsHybridBridgeAdv_v2632)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2632",
          ).WindowsHybridBridgeRingtone_v2632)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2632",
          ).WindowsHybridBridgeMetaConfig_v2632)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2632 = e;
  },
  98,
);
