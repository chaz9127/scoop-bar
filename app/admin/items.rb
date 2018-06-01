ActiveAdmin.register Item do
  actions :all, except: :destroy
  permit_params :name, :description, :price

  index do
    selectable_column
    id_column
    column :name
    column :price
    actions
  end

  filter :name
  filter :price

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :price
    end
    f.actions
  end

end
