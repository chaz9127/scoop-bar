ActiveAdmin.register Purchase do
  actions :all, except: [:destroy, :new, :edit, :update, :create]
  permit_params :name, :description, :price

  index do
    selectable_column
    id_column
    column ('Item Name') { |p| p.item.name }
    column ('User Email') { |p| p.user.email }
    column :net_cost
    actions
  end

  show do
    attributes_table do
      row :id
      row :item
      row :user
      row :created_at
      row :updated_at
    end
  end

  filter :net_cost
  filter :item_name_cont, label: 'Item Name'

end
