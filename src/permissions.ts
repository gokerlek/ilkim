type permissions = {
  home: number;
};

export const permissions: permissions = {
  home: 1,
};

export const admin_permissions: number[] = [permissions.home];

type ComponentPermissions = {
  home: number[];
};

export const component_permissions: ComponentPermissions = {
  home: [permissions.home],
};
