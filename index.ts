export interface WebAppUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface WebAppChat {
  id: number;
  type: "group" | "supergroup" | "channel";
  title: string;
  username?: string;
  photo_url?: string;
}

export interface WebAppInitData {
  query_id?: string;
  auth_date: number;
  hash: string;
  user?: WebAppUser & {
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
  };
  receiver?: WebAppUser;
  start_param?: string;
  can_send_after?: number;
  chat?: WebAppChat;
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
  chat_instance?: string;
}

export interface ThemeParams {
  bg_color: `#${string}`;
  secondary_bg_color: `#${string}`;
  text_color: `#${string}`;
  hint_color: `#${string}`;
  link_color: `#${string}`;
  button_color: `#${string}`;
  button_text_color: `#${string}`;
  header_bg_color: `#${string}`;
  accent_text_color: `#${string}`;
  section_bg_color: `#${string}`;
  section_header_text_color: `#${string}`;
  subtitle_text_color: `#${string}`;
  destructive_text_color: `#${string}`;
  section_separator_color: `#${string}`;
  bottom_bar_bg_color: `#${string}`;
}

export interface HapticFeedback {
  impactOccurred: (
    style: "light" | "medium" | "heavy" | "rigid" | "soft"
  ) => HapticFeedback;
  notificationOccurred: (
    type: "error" | "success" | "warning"
  ) => HapticFeedback;
  selectionChanged: () => HapticFeedback;
}

type CloudStorageKey = string;
type CloudStorageValue = string;

interface CloudStorageItems {
  [key: CloudStorageKey]: CloudStorageValue;
}

export interface CloudStorage {
  setItem: (
    key: CloudStorageKey,
    value: CloudStorageValue,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
  getItem: (
    key: CloudStorageKey,
    callback?: (error: string | null, result?: CloudStorageValue) => void
  ) => void;
  getItems: (
    keys: Array<CloudStorageKey>,
    callback?: (error: string | null, result?: CloudStorageItems) => void
  ) => void;
  getKeys: (
    callback?: (error: string | null, result?: Array<CloudStorageKey>) => void
  ) => void;
  removeItem: (
    key: CloudStorageKey,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
  removeItems: (
    key: Array<CloudStorageKey>,
    callback?: (error: string | null, result?: boolean) => void
  ) => void;
}

export interface BackButton {
  isVisible: boolean;
  show: VoidFunction;
  hide: VoidFunction;
  onClick: (cb: VoidFunction) => void;
  offClick: (cb: VoidFunction) => void;
}

type BottomButtonParams = {
  color?: string;
  text?: string;
  text_color?: string;
  is_active?: boolean;
  is_visible?: boolean;
  has_shine_effect?: boolean;
};

export interface BottomButton {
  isActive: boolean;
  isVisible: boolean;
  isProgressVisible: boolean;
  text: string;
  color: `#${string}`;
  textColor: `#${string}`;
  show: VoidFunction;
  hide: VoidFunction;
  enable: VoidFunction;
  disable: VoidFunction;
  hideProgress: VoidFunction;
  showProgress: (leaveActive?: boolean) => void;
  onClick: (callback: VoidFunction) => void;
  offClick: (callback: VoidFunction) => void;
  setText: (text: string) => void;
  setParams: (params: BottomButtonParams) => void;
  hasShineEffect: string;
}

export type MainButton = BottomButton;

export interface SecondaryButton extends BottomButton {
  position: "top" | "left" | "bottom" | "right";
  setParams: (
    params: BottomButtonParams & {
      position?: SecondaryButton["position"];
    }
  ) => void;
}

export interface SettingsButton {
  isVisible: boolean;
  onClick: (callback: VoidFunction) => SettingsButton;
  offClick: (callback: VoidFunction) => SettingsButton;
  show: () => SettingsButton;
  hide: () => SettingsButton;
}

export type InvoiceStatuses = "pending" | "failed" | "cancelled" | "paid";

export type EventNames =
  | "invoiceClosed"
  | "settingsButtonClicked"
  | "backButtonClicked"
  | "mainButtonClicked"
  | "secondaryButtonClicked"
  | "viewportChanged"
  | "themeChanged"
  | "popupClosed"
  | "qrTextReceived"
  | "clipboardTextReceived"
  | "writeAccessRequested"
  | "contactRequested"
  | "scanQrPopupClosed"
  | "fullscreenChanged"
  | "fullscreenFailed"
  | "emojiStatusSet"
  | "emojiStatusFailed"
  | "emojiStatusAccessRequested"
  | "homeScreenAdded"
  | "homeScreenChecked"
  | "accelerometerStarted"
  | "accelerometerStopped"
  | "accelerometerChanged"
  | "accelerometerFailed"
  | "deviceOrientationStarted"
  | "deviceOrientationStopped"
  | "deviceOrientationChanged"
  | "deviceOrientationFailed"
  | "gyroscopeStarted"
  | "gyroscopeStopped"
  | "gyroscopeChanged"
  | "gyroscopeFailed"
  | "locationManagerUpdated"
  | "locationRequested";

export interface LocationData {
  latitude: number;
  longitude: number;
  altitude: number | null;
  course: number | null;
  speed: number | null;
  horizontal_accuracy: number | null;
  vertical_accuracy: number | null;
  course_accuracy: number | null;
  speed_accuracy: number | null;
}

export type EventParams = {
  invoiceClosed: { url: string; status: InvoiceStatuses };
  settingsButtonClicked: void;
  backButtonClicked: void;
  mainButtonClicked: void;
  secondaryButtonClicked: void;
  viewportChanged: { isStateStable: boolean };
  themeChanged: void;
  popupClosed: { button_id: string | null };
  qrTextReceived: { data: string };
  clipboardTextReceived: { data: string };
  writeAccessRequested: { status: "allowed" | "cancelled" };
  contactRequested: { status: "sent" | "cancelled" };
  scanQrPopupClosed: void;
  fullscreenChanged: void;
  fullscreenFailed: { error: string };
  emojiStatusSet: void;
  emojiStatusFailed: { error: string };
  emojiStatusAccessRequested: { status: "allowed" | "cancelled" };
  homeScreenAdded: void;
  homeScreenChecked: { status: string };
  accelerometerStarted: void;
  accelerometerStopped: void;
  accelerometerChanged: void;
  accelerometerFailed: { error: string };
  deviceOrientationStarted: void;
  deviceOrientationStopped: void;
  deviceOrientationChanged: void;
  deviceOrientationFailed: { error: string };
  gyroscopeStarted: void;
  gyroscopeStopped: void;
  gyroscopeChanged: void;
  gyroscopeFailed: { error: string };
  locationManagerUpdated: void;
  locationRequested: { locationData: LocationData };
};

export type PopupParams = {
  title?: string;
  message: string;
  buttons?: PopupButton[];
};

export type PopupButton = {
  id?: string;
} & (
  | {
      type: "default" | "destructive";
      text: string;
    }
  | {
      type: "ok" | "close" | "cancel";
    }
);

export type ScanQrPopupParams = {
  text?: string;
};

export type Platforms =
  | "android"
  | "android_x"
  | "ios"
  | "macos"
  | "tdesktop"
  | "weba"
  | "webk"
  | "unigram"
  | "unknown";

export interface Accelerometer {
  isStarted: boolean;
  x: number | null;
  y: number | null;
  z: number | null;
  start: (params?: { refresh_rate?: number }, callback?: (success: boolean) => void) => Accelerometer;
  stop: (callback?: (success: boolean) => void) => Accelerometer;
}

export interface DeviceOrientation {
  isStarted: boolean;
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
  start: (params?: { refresh_rate?: number, need_absolute?: boolean }, callback?: (success: boolean) => void) => DeviceOrientation;
  stop: (callback?: (success: boolean) => void) => DeviceOrientation;
}

export interface Gyroscope {
  isStarted: boolean;
  x: number | null;
  y: number | null;
  z: number | null;
  start: (params?: { refresh_rate?: number }, callback?: (success: boolean) => void) => Gyroscope;
  stop: (callback?: (success: boolean) => void) => Gyroscope;
}

export interface LocationManager {
  isInited: boolean;
  isLocationAvailable: boolean;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  init: (callback?: VoidFunction) => LocationManager;
  getLocation: (callback: (location: LocationData | null) => void) => LocationManager;
  openSettings: () => LocationManager;
}

export interface BiometricManager {
  isInited: boolean;
  isBiometricAvailable: boolean;
  biometricType: "finger" | "face" | "unknown";
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  isBiometricTokenSaved: boolean;
  deviceId: string;
  init: (callback?: VoidFunction) => BiometricManager;
  requestAccess: (
    params: { reason?: string },
    callback?: (isAccessGranted: boolean) => void
  ) => BiometricManager;
  authenticate: (
    params: { reason?: string },
    callback?: (isAuthenticated: boolean, biometricToken?: string) => void
  ) => BiometricManager;
  updateBiometricToken: (
    token: string,
    callback?: (isBiometricTokenUpdated: boolean) => void
  ) => BiometricManager;
  openSettings: () => BiometricManager;
}

export interface WebApp {
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  platform: Platforms;
  headerColor: `#${string}`;
  backgroundColor: `#${string}`;
  bottomBarColor: string;
  isClosingConfirmationEnabled: boolean;
  isVerticalSwipesEnabled: boolean;
  isFullscreen: boolean;
  isOrientationLocked: boolean;
  isActive: boolean;
  safeAreaInset: { top: number; bottom: number; left: number; right: number };
  contentSafeAreaInset: { top: number; bottom: number; left: number; right: number };
  themeParams: ThemeParams;
  initDataUnsafe: WebAppInitData;
  initData: string;
  colorScheme: "light" | "dark";
  version: string;
  BiometricManager: BiometricManager;
  Accelerometer: Accelerometer;
  DeviceOrientation: DeviceOrientation;
  Gyroscope: Gyroscope;
  LocationManager: LocationManager;
  MainButton: MainButton;
  SecondaryButton: SecondaryButton;
  BackButton: BackButton;
  SettingsButton: SettingsButton;
  HapticFeedback: HapticFeedback;
  CloudStorage: CloudStorage;
  onEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void;
  offEvent: <T extends EventNames>(
    eventName: T,
    callback: (params: EventParams[T]) => unknown
  ) => void;
  sendData: (data: unknown) => void;
  close: (params?: { return_back?: boolean }) => void;
  expand: VoidFunction;
  isVersionAtLeast: (version: string) => boolean;
  setHeaderColor: (color: "bg_color" | "secondary_bg_color" | `#${string}`) => void;
  setBackgroundColor: (color: "bg_color" | "secondary_bg_color" | `#${string}`) => void;
  setBottomBarColor: (color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | `#${string}`) => void;
  enableClosingConfirmation: VoidFunction;
  disableClosingConfirmation: VoidFunction;
  enableVerticalSwipes: VoidFunction;
  disableVerticalSwipes: VoidFunction;
  lockOrientation: VoidFunction;
  unlockOrientation: VoidFunction;
  requestFullscreen: VoidFunction;
  exitFullscreen: VoidFunction;
  addToHomeScreen: VoidFunction;
  checkHomeScreenStatus: (callback: (status: string) => void) => void;
  ready: VoidFunction;
  openLink: (url: string, options?: { try_instant_view?: boolean; try_browser?: boolean }) => void;
  openTelegramLink: (url: string, options?: { force_request?: boolean }) => void;
  openInvoice: (url: string, callback?: (status: InvoiceStatuses) => void) => void;
  showPopup: (params: PopupParams, callback?: (button_id?: string) => void) => void;
  showAlert: (message: string, callback?: () => void) => void;
  showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
  showScanQrPopup: (params: ScanQrPopupParams, callback?: (text: string) => boolean | void) => void;
  closeScanQrPopup: VoidFunction;
  readTextFromClipboard: (callback?: (text: string) => void) => void;
  requestWriteAccess: (callback?: (access: boolean) => void) => void;
  requestContact: (callback?: (success: boolean, eventData?: EventParams['contactRequested']) => void) => void;
  shareToStory: (mediaURL: string, params?: ShareStoryParams) => void;
  downloadFile: (params: { url: string; file_name: string }, callback?: (isDownloading: boolean) => void) => void;
  shareMessage: (msg_id: string, callback?: (success: boolean) => void) => void;
  setEmojiStatus: (
    custom_emoji_id: string, 
    params?: { duration?: number },
    callback?: (success: boolean) => void
  ) => void;
  requestEmojiStatusAccess: (callback?: (allowed: boolean) => void) => void;
  switchInlineQuery: (
    query: string,
    chooseChatTypes?: Array<"users" | "bots" | "groups" | "channels">
  ) => void;
  invokeCustomMethod: <T = any>(
    method: string,
    params?: Record<string, any>,
    callback?: (err: string | null, result?: T) => void
  ) => void;
}

export interface Telegram {
  WebApp: WebApp;
}
