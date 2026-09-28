__d(
  "WAWebWindowsHybridBridge.v2639",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2639",
    "WAWebWindowsHybridBridgeAbProps.v2639",
    "WAWebWindowsHybridBridgeAdv.v2639",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2639",
    "WAWebWindowsHybridBridgeConnection.v2639",
    "WAWebWindowsHybridBridgeContacts.v2639",
    "WAWebWindowsHybridBridgeDebugFeatures.v2639",
    "WAWebWindowsHybridBridgeLinksPreview.v2639",
    "WAWebWindowsHybridBridgeMediaFiles.v2639",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2639",
    "WAWebWindowsHybridBridgeMetaConfig.v2639",
    "WAWebWindowsHybridBridgeNativeAppState.v2639",
    "WAWebWindowsHybridBridgeOds.v2639",
    "WAWebWindowsHybridBridgePictures.v2639",
    "WAWebWindowsHybridBridgePreferences.v2639",
    "WAWebWindowsHybridBridgeRateTheApp.v2639",
    "WAWebWindowsHybridBridgeRingtone.v2639",
    "WAWebWindowsHybridBridgeScalingControl.v2639",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2639",
    "WAWebWindowsHybridBridgeSharesheet.v2639",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2639",
    "WAWebWindowsHybridBridgeTouchpadFix.v2639",
    "WAWebWindowsHybridBridgeVoip.v2639",
    "WAWebWindowsHybridBridgeWam.v2639",
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
            "WAWebWindowsHybridBridgeAbProps.v2639",
          ).WindowsHybridBridgeAbProps_v2639)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2639",
          ).WindowsHybridBridgeWam_v2639)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2639",
          ).WindowsHybridBridgePreferences_v2639)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2639",
          ).WindowsHybridBridgeScalingControl_v2639)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2639",
          ).WindowsHybridBridgeOds_v2639)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2639",
          ).WindowsHybridBridgePictures_v2639)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2639",
            ).WindowsHybridBridgeDebugFeatures_v2639)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2639",
          ).VoipWinRTBridge_v2639)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2639",
          ).WAWebWindowsHybridBridgeRateTheApp_v2639)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2639",
          ).WindowsHybridBridgeConnection_v2639)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2639",
          ).WindowsHybridBridgeTouchpadFix_v2639)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2639",
          ).WindowsHybridBridgeLinksPreview_v2639)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2639",
            ).WindowsHybridBridgeContacts_v2639)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2639",
            ).WindowsHybridBridgeContacts_v2639)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2639",
          ).WAWebWindowsHybridBridgeMediaFiles_v2639)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2639",
          ).WAWebWindowsHybridBridgeSharesheet_v2639)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2639",
          ).WindowsHybridAppActivationBridge_v2639)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2639",
          ).WindowsHybridBridgeNativeAppState_v2639)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2639",
          ).WindowsHybridBridgeSystemIntegrations_v2639)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2639",
          ).WindowsHybridBridgeBrowserExtensions_v2639)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2639",
          ).WindowsHybridBridgeSeamlessMigration_v2639)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2639",
          ).WindowsHybridBridgeMediaTranscoder_v2639)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2639",
          ).WindowsHybridBridgeAdv_v2639)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2639",
          ).WindowsHybridBridgeRingtone_v2639)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2639",
          ).WindowsHybridBridgeMetaConfig_v2639)(I)),
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
    l.WindowsHybridBridge_v2639 = e;
  },
  98,
);
