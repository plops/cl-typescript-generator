(asdf:defsystem cl-typescript-generator
    :version "0"
    :description "Emit Typescript code"
    :maintainer " <kielhorn.martin@gmail.com>"
    :author " <kielhorn.martin@gmail.com>"
    :licence "GPL"
    :depends-on ("alexandria")
    :serial t
    :components ((:file "package")
		 (:file "ts")) )
